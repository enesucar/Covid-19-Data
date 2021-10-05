$(document).ready(function() {
  var header = {
    'content-type': 'application/json',
    'authorization': 'apikey 7GrPyoVgdpxJ16CHtUsP8J:6G9ViriCbN4EFQ7S42fMrX'
  }

  $.ajax({
    url: 'https://api.collectapi.com/corona/countriesData',
    type: 'GET',
    headers: header,
    success: function(responseData) {
      $.each(JSON.parse(JSON.stringify(responseData.result)), function(index, value) {
        var outputHTML = '<tr><th scope="row">' + this.country +  '</th>' +
                         '<td>' + this.totalCases + '</td>' +
                         '<td>' + this.totalDeaths + '</td>' +
                         '<td>' + this.totalRecovered + '</td>' +
                         '<td>' + this.activeCases + '</td>' +
                         '<td>' + this.newCases + '</td>' +
                         '<td>' + this.newDeaths + '</td></tr>';

        var tbody = $('#table-covid-19 > tbody').append(outputHTML);
      });

      $('#table-covid-19').DataTable();
    }
  });
});
