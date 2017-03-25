$(document).ready(function() {
    $('#table').DataTable();


    

Papa.parse('/files/andmed_csv_ok.csv', {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
      	console.log(results)
        data = results;
      }
    });



	} );







