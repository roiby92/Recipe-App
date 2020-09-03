const renderer = new Renderer()

$('#search').on('click',function(){
    const ingredient = $('#ingredient').val()
    $.ajax({
        method: 'GET',
        url: `/recipes/${ingredient}`,
        success: renderer.render
    })
})

$('#results').on('click','.recipe-img',function(){
    const $recipe = $(this).closest('.recipe')
    const ingredient = $recipe.find('.ingredients').find('.ingredient')
    alert(ingredient[0].textContent)
})
