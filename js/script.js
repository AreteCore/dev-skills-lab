const $skillInput = $("[type='text']")
const $submit = $("[type='submit'")
const $ul = $("#list")


$submit.on("click", (event) => {
    // prevents default form behavior
    console.log(event)
    event.preventDefault()
    // get the value from the input
    // textInput.value
    const newSkill = $skillInput.val()
    console.log(newSkill)
    // add an li with the new skill
    const $li = $("<li>")
    $li.html(`<div class="bullet">X</div>${newSkill}`)
    $ul.append($li)
    // add removal event listener
    const remove = (event) => {
        // turn the event target to a jQ object
        const $target = $(event.target)
        // remove it
        $target.remove()
    }
    $li.on("click", remove)
    // clear the input
    $skillInput.val("")
})