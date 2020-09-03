const renderer = new Renderer()

$('#search').on('click',function(){
    const ingredient = $('#ingredient').val()
    $.ajax({
        method: 'GET',
        url: `/recipes/${ingredient}`,
        success: renderer.render
    })
})

