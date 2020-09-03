class Renderer{

    render(data){
        const source = $("#ingredient-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ data })
        $('#results').append(newHTML)
    }
}