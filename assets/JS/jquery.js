$(function() {
  $('#counter').data('button', 0);
  $('#update').click(function(){
  $('#counter').html(function(){
     $this = $(this),
      count = $this.data('button') + 1;
        $this.data('button', count);
         return count;
    });
});
});
$(function() {
  $('#count').data('button', 0);
  $('#downgrade').click(function(){
  $('#counter').html(function(){
     $this = $(this),
      count = $this.data('button') - 1;
        $this.data('button', count);
         return count;
    });
});
});

//La méthode .data () nous permet d’attacher des données de tout type aux éléments
//DOM de manière à éviter les références circulaires et donc les fuites de mémoire.

// $(function(){
//   var count = 0;
//   $("#count+").click(function() {
//       count++;
//       $("#count").html("Clics : " + count);
//   });
//   $("#count-").click(function() {
//       count--;
//       $("#count").html("Clics : " + count);
//   });
// });

// $('#count+').click(function(){
//   $('#count').get(0).value++;
// });
// $('#count-').click(function(){
//   $('#count').get(0).value--;
// });
