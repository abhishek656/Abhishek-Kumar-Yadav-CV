


const bars = document.querySelectorAll('.progress_bar');

bars.forEach(function(bar){
    let percentage=bar.dataset.percent;
   

    let tooltip = bar.children[0];



    bar.style.width=percentage +'%';

    console.log(percentage);

})

