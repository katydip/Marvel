(function() {

  $(function() {

    var startswith = $("#startswith");
    var button = $("#button");
    var input;

//I"m using a search button- will explore the .change() option at a later date https://api.jquery.com/change/
    button.click(function() {
      $("#table").empty();
      input = startswith.val();
      console.log(input);

      $.get(("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=635bae1f96a700eef368740d1eca85e4&hash=5980d1409602f487842c4684b955589e&limit=100&nameStartsWith	=" + input), function(data) {

        var results = data.data.results;
        $.each(results, function(index, value) {
          console.log(value.name);
          var link = value.thumbnail.path + "." + value.thumbnail.extension;
          console.log(link);
          // $("#table").append("<tr><td>" + value.name + "</td><td><img width='250px' src=" + link + "></td></tr>");
          $("#table").append("<tr><td>" + value.name + `</td><td><img width='250px' src=${link}></td></tr>`);

        })

      })
    })






  })

})();
