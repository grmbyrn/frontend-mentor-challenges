fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('advice').innerHTML = `
            <p class='advice-no'>Advice #${data.slip.id}</p>
            <h1 class='advice-text'>"${data.slip.advice}"</h1>
        `
    })