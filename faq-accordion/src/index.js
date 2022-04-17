document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        let accCollapse = item.nextElementSibling;

        if(!item.classList.contains('collapsing')){
            if(!item.classList.contains('open')){
                accCollapse.style.display = 'block';
                let accHeight = accCollapse.clientHeight;
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
    
                accCollapse.classList = 'accordion__collapse collapsing'
    
                setTimeout(() => {
                    accCollapse.classList = 'accordion__collapse collapse open'
                }, 300);
            } else {
                accCollapse.classList = 'accordion__collapse collapsing'
    
                setTimeout(() => {
                    accCollapse.style.height = '0px'
                }, 1);
    
                setTimeout(() => {
                    accCollapse.classList = 'accordion__collapse collapse'
                    accCollapse.style.height = ''
                }, 300);
            }
            item.classList.toggle('open')
        }
    })
        
})