let urls = {
  topArtists: "https://api.spotify.com/v1/me/top/artists",
  audioFeatures: "https://api.spotify.com/v1/audio-features/?ids=",
};

let queryParams = {
  time_range: "medium_term",
  limit: "50",
  offset: "0",
};

// routing
$(document).ready((e) => {
  requestPromises(topArtists, urls.topArtists);

  topArtists();
  loadArtistGenreData(HREFs);
});

// ## Functions to make request using the token
function spotifyRequest(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "GET",
      headers: {
        Authorization: "Bearer " + _token,
      },
      data: queryParams,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        console.log(error);
        reject(new Error("Something messed up"));
      },
    });
  });
}

function requestPromises(func, url) {
  console.log(spotifyRequest(url));
  spotifyRequest(url)
    .then((data) => {
      console.log(data);
      func(data);
    })
    .catch((err) => {
      console.log("There was an error");
      console.log(err);
    });
}

//## Function that parses/displays user topArtists data, also calls hipsterRating func.
var topArtists = (data) => {
  clearPage();

  let popularityRating = hipsterRating(data);
  document.querySelector("#percent").innerHTML = `${popularityRating}<b>%</b>`;
  document.querySelector(
    "#extraInfo"
  ).innerHTML = `of Spotify listeners <b>haven't</b> heard of your top artists. `;

  document.querySelector("#readMore").innerText = "see more of your stats";

  document.querySelector("#artistTitle").innerHTML =
    "your most obscure <b>artists</b>";

  document.querySelector("#select").innerHTML =
    "select an artist to learn more";

  document.querySelector("#squig").innerHTML = `        <svg
          id="squiggle"
          style="position: absolute; right: 20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="32.303"
          height="295.339"
          viewBox="0 0 32.303 295.339"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_13"
                data-name="Rectangle 13"
                width="271.678"
                height="20.284"
                fill="#f1bec0"
              />
            </clipPath>
          </defs>
          <g
            id="Group_32"
            data-name="Group 32"
            transform="translate(-307.697 -461.661)"
          >
            <g
              id="Group_24"
              data-name="Group 24"
              transform="translate(307.697 733.339) rotate(-90)"
            >
              <g id="Group_15" data-name="Group 15" clip-path="url(#clip-path)">
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M271.678,0h-1.5c-6.015,0-8.991,4.981-11.617,9.375-2.539,4.249-4.732,7.918-9.049,7.918s-6.511-3.669-9.049-7.918C237.841,4.981,234.865,0,228.85,0s-8.992,4.981-11.618,9.375c-2.539,4.249-4.731,7.918-9.049,7.918s-6.511-3.669-9.05-7.918C196.507,4.981,193.531,0,187.515,0S178.523,4.981,175.9,9.375c-2.539,4.249-4.732,7.918-9.05,7.918s-6.511-3.669-9.05-7.918C155.171,4.981,152.194,0,146.179,0s-8.992,4.981-11.618,9.375c-2.539,4.249-4.732,7.918-9.05,7.918S119,13.624,116.46,9.375C113.834,4.981,110.858,0,104.843,0S95.85,4.981,93.225,9.375c-2.539,4.249-4.732,7.918-9.05,7.918s-6.511-3.669-9.05-7.918C72.5,4.981,69.522,0,63.506,0S54.514,4.981,51.888,9.375c-2.539,4.249-4.732,7.918-9.05,7.918s-6.512-3.67-9.052-7.918C31.16,4.981,28.183,0,22.167,0S13.174,4.981,10.548,9.375C8.008,13.624,5.815,17.293,1.5,17.293H0v2.991H1.5c6.017,0,8.993-4.981,11.62-9.375,2.539-4.249,4.733-7.918,9.052-7.918s6.512,3.669,9.051,7.918c2.627,4.394,5.6,9.375,11.62,9.375S51.83,15.3,54.456,10.909c2.539-4.249,4.732-7.918,9.05-7.918s6.512,3.669,9.051,7.918c2.626,4.394,5.6,9.375,11.618,9.375s8.992-4.981,11.618-9.375c2.539-4.249,4.732-7.918,9.05-7.918s6.511,3.669,9.05,7.918c2.626,4.394,5.6,9.375,11.618,9.375s8.992-4.981,11.618-9.375c2.539-4.249,4.732-7.918,9.051-7.918s6.511,3.669,9.05,7.918c2.626,4.394,5.6,9.375,11.617,9.375s8.992-4.981,11.618-9.375C181,6.66,183.2,2.991,187.515,2.991s6.511,3.669,9.05,7.918c2.626,4.394,5.6,9.375,11.618,9.375s8.992-4.981,11.617-9.375c2.539-4.249,4.731-7.918,9.05-7.918s6.51,3.669,9.049,7.918c2.626,4.394,5.6,9.375,11.617,9.375s8.991-4.981,11.617-9.375c2.539-4.249,4.731-7.918,9.049-7.918h1.5Z"
                  transform="translate(0 0)"
                  fill="#f1bec0"
                />
              </g>
            </g>
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M16,0,32,24H0Z"
              transform="translate(340 757) rotate(180)"
              fill="#f1bec0"
            />
          </g>
        </svg>`;
  document.querySelector("#readMoreSvg").innerHTML = `      
`;

  //ARTIST LIST FUNCTIONS
  var obscureArtistsArr = data.items.sort((a, b) =>
    a.popularity > b.popularity ? 1 : -1
  );

  let obscureArtists = obscureArtistsArr.slice(0, 3);
  // console.log(data.items);

  obscureArtists.map((artist) => {
    let item = $(
      `<li id=\"${artist.name}\" class=\"list-group-item p-pink \"><p>${artist.name}</p></li>`
    );
    item.appendTo($("#dataList"));

    $(".list-group-item p").each(function () {
      var pdata = $(this);
      pdata.html(pdata.text().replace(/(^\w+)/, "<strong>$1</strong>"));
    });

    document.querySelector("#line").innerHTML = `<div class ="line"></div>`;

    $("#lineStar").css("background-image", "url(sparkle2.png)");

    $("#listStar").css("background-image", "url(spiky.png)");

    $("#listSparkle").css("background-image", "url(sparkle.png)");

    //on artist click, take user to artist page
    item.on("click", function () {
      console.log(this.id);

      clearPage();

      document.querySelector("#heading").innerHTML = `&#8592; back`;

      $("#artistPhoto").css(
        "background-image",
        "url(" + artist.images[0].url + ")"
      );

      document.querySelector("#artistName").innerText = artist.name;

      $("#artistSquig").css("background-image", "url(squiggle.png)");

      //show followers -- always 0? an api issue
      document.querySelector("#artistFollowers").innerHTML =
        artist.followers.total + `      <p class="p-pink">Followers</p>`;

      //show popularity
      document.querySelector("#artistPopularity").innerHTML =
        artist.popularity + `      <p class="p-pink">Popularity</p>`;

      document.querySelector(
        "#artistStar"
      ).innerHTML = `<svg id="Layer_3" data-name="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 855.73 1537.42"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#e07a42;}</style><clipPath id="clip-path" transform="translate(-54.91 -55.05)"><polygon class="cls-1" points="0 110.29 1604.37 0 1714.38 1537.24 110.01 1647.53 0 110.29"/></clipPath></defs><g id="Group_22" data-name="Group 22"><g class="cls-2"><g id="Group_13" data-name="Group 13"><path class="cls-3" d="M910.64,1561.59a3.84,3.84,0,0,1-.65.1c-2.61.18-16.68-1.59-36.8-54.15A1365.07,1365.07,0,0,1,832.26,1364c-30.32-121.7-50.94-197-90.78-209.68a48.27,48.27,0,0,0-18.12-1.95c-41.45,2.85-103.09,49-193.14,120a1488.48,1488.48,0,0,1-120.09,88.77C362,1391,351,1383.9,350,1383s-10-10.31,14.19-60.13a1414.67,1414.67,0,0,1,75-126.3c70.36-110.32,111.67-180,92.51-216.88-18.72-36-99.37-45.07-229.41-56.84a1533.37,1533.37,0,0,1-154.09-18.79C91,892.32,87.21,879.22,87,876.71s1.71-16,56.63-35.45a1534.07,1534.07,0,0,1,149.9-39.68c127.09-29.44,205.66-49.44,219.07-87.66,13.74-39.18-37.11-102.49-122.49-202.11A1423.92,1423.92,0,0,1,297.88,397c-31-46-23.57-56.55-22.61-57.6s10.78-9.57,62.7,13.41q67.56,32.46,131.54,71.48c114.91,67.1,187.47,106.48,226,88,37.65-18.06,47.35-95.38,60-220a1364.23,1364.23,0,0,1,20.09-147.73c12.43-54.8,26.11-58.47,28.73-58.65S821,87.42,841.16,140a1367.66,1367.66,0,0,1,40.93,143.54c10.25,41.15,19.4,77,28.55,106.88v-125c-29-116-55-213.94-108.45-210.26-55.13,3.79-66,110.55-78.59,234.19-4.81,47.17-9.77,95.94-17.25,133.14-10.36,51.57-21.85,60.71-25.12,62.28-4.56,2.19-20.57,4.77-70.43-18.41-36.73-17.08-81.35-43.14-124.52-68.35C362,325.43,284.14,282.78,251.07,319.27s21.87,104.37,114.22,212.12c32.08,37.43,65.27,76.14,88,108.58,30.94,44,30.49,59.59,28.87,64.23-1.16,3.32-9,15.5-60.87,32.53-37.41,12.28-87.13,23.8-135.21,34.95C160.07,800.88,51.23,826.1,55,878.91s115.15,62.9,244.12,74.58c49.21,4.45,100.07,9,138.88,16.1,53.78,9.77,63.28,20.75,64.91,23.89,2.27,4.36,4.92,19.69-19.43,67.55-17.94,35.23-45.27,78.1-71.71,119.55C335.66,1299.93,291,1374.7,328.87,1406.26S437.81,1385,550.56,1296.11c39.16-30.86,79.65-62.78,113.57-84.71,46.06-29.78,62.28-29.41,67.11-27.87,3.47,1.11,16.15,8.59,33.75,58.23,12.7,35.83,24.57,83.45,36,129.49,29.79,119.54,55.55,222.93,109.61,221.2Z" transform="translate(-54.91 -55.05)"/></g></g></g></svg>`;
    });
  });

  var otherArtist1 = data.items[3].name;
  var otherArtist2 = data.items[4].name;
  var otherArtist3 = data.items[5].name;
  var otherArtist4 = data.items[6].name;

  let otherAritstText = $(
    `<p>plus, <span class="strong">${otherArtist1}</span>, <span class="strong">${otherArtist2}</span>, <span class="strong">${otherArtist3}</span>, and <span class="strong">${otherArtist4}</span>`
  );
  otherAritstText.appendTo($("#otherArtists"));

  var genre1 = data.items[0].genres[0];
  var genre2 = data.items[1].genres[0];
  var genre3 = data.items[2].genres[0];

  let genreText = $(
    `<p>You most often listen to genres like <span class="p-o">${genre1}</span>, <span class="p-o">${genre2}</span>, and <span class="p-o">${genre3}</span>`
  );
  genreText.appendTo($("#genres"));
};

//

function hipsterRating(data) {
  let popularityRating = 0;
  data.items.forEach((artist) => {
    popularityRating += artist.popularity;
  });
  popularityRating = (popularityRating / data.items.length).toFixed(0);
  return popularityRating;
}

function clearPage() {
  document.querySelector("#dataList").innerHTML = "";
  document.querySelector("#featuresDescription").innerHTML = "";
  document.querySelector("#audioFeaturesList").innerHTML = "";
  document.querySelector("#homeDescription").innerText = "";
  document.querySelector("#extraInfo").innerText = "";
  document.querySelector("#genres").innerText = "";
  document.querySelector("#artistPopularity").innerText = "";
  document.querySelector("#artistFollowers").innerText = "";
  document.querySelector("#artistName").innerText = "";
  $("#artistPhoto").css("background-image", "");
  document.querySelector("#heading").innerHTML = "";
  document.querySelector("#percent").innerHTML = "";
  document.querySelector("#readMore").innerHTML = "";
  document.querySelector("#artistTitle").innerHTML = "";
  document.querySelector("#select").innerHTML = "";
  document.querySelector("#squig").innerHTML = "";
  document.querySelector("#readMoreSvg").innerHTML = "";
  document.querySelector("#artistSquig").innerHTML = "";
  document.querySelector("#otherArtists").innerHTML = "";
  document.querySelector("#line").innerHTML = "";
}
