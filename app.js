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

      //show followers -- always 0? an api issue
      document.querySelector("#artistFollowers").innerHTML =
        artist.followers.total + `      <p class="p-pink">Followers</p>`;

      //show popularity
      document.querySelector("#artistPopularity").innerHTML =
        artist.popularity + `      <p class="p-pink">Popularity</p>`;
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
  document.querySelector("#otherArtists").innerHTML = "";
}
