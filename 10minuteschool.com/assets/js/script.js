AOS.init({
    duration: 800,
})

const searchForm = document.getElementById('search-form')

const searchInput = document.getElementById('search-input')
superplaceholder({
    el: searchInput,
    sentences: [
        'জনপ্রিয় সার্চ: মেঘনাদবধ',
        'জনপ্রিয় সার্চ: জৈব রসায়ন',
        'জনপ্রিয় সার্চ: বাংলাদেশের মুক্তিযুদ্ধ স্মার্টবুক'
    ],
    options: {
        // delay between letters (in milliseconds)
        letterDelay: 100, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 1000,
        // should start on input focus. Set false to autostart
        startOnFocus: false, // [DEPRECATED]
        // loop through passed sentences
        loop: true,
        // Initially shuffle the passed sentences
        shuffle: false,
        // Show cursor or not. Shows by default
        showCursor: true,
        // String to show as cursor
        cursor: '|'
    }
})


searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let url = `https://classroom.10minuteschool.com/search?q=${searchInput.value}`
    // let url = `https://classroom.10minuteschool.com/search?q=${new URLSearchParams(searchInput.value)}`
    // let url = `http://localhost:4200/search?q=${new URLSearchParams(searchInput.value)}`
    // console.log(url)

    location.assign(url)
})