
const searchBox = document.querySelector('#select-search-country')
const optionsList = document.querySelectorAll('.option-country')

searchBox.addEventListener('keyup', function (e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
};
$(() => {
    $('.selected').click((e) => {
  
        $(e.target).closest('.select-box').toggleClass('focus')
        if ($(e.target).closest('.select-box').hasClass('focus')) {
            $('.select-box').not($(e.target).closest('.select-box')).removeClass('focus')
        }
    })

    $('.option label').click((e) => {
        let parentOption = $(e.target).closest('.option')[0]
        let inputOption = $(parentOption).find('.option-value')[0]
        let inputValue = $(inputOption).val()
        let selectedValue = $(parentOption).closest('.select-box').find('.selected-value')[0]
        $(parentOption).closest('.select-box').addClass('selected-checked').removeClass('focus')
        $(selectedValue).text(inputValue)
        
    })
})
