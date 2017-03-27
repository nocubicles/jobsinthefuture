$(document).ready(function() {
    $('#table').DataTable( {
        "processing": true,
         responsive: true,
        "ajax": "files/andmed_json.json",
        "columns": [
            { "data": "className" },
            { "data": "value" }
        ]
    } );
} );





