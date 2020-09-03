class Renderer{

    render(data){
        $('#results').empty()
        const source = $("#ingredient-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ data })
        $('#results').append(newHTML)
    }
}