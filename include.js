    $(document).ready(function(){
      $.ajax({
          url: 'katawan.html',
          type: 'GET',
          success: function(data) {
              $("#katawan").html(data);
          }
      });
    });
 
