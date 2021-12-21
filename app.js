$('#myId').text("Hello World");
$('a').attr('href', 'https://learn.jquery.com/using-jquery-core/attributes/');
let bigDiv = $('#parent');

bigDiv.children().css({'height' : '10vh', 'width' : '15vw', 'border' : '1px dashed black'});

bigDiv.children().eq(1).append('ceci est un texte');

alert(bigDiv.children().eq(1).index());