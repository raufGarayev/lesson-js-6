// const usersBlock = document.getElementById('users')
// const usersTable = document.querySelector('table')

// const res = fetch('https://jsonplaceholder.typicode.com/posts')

// res.then((response) => {
//     return response.json()
// }).then((data) => {
//     data.forEach(user => {
//         printUserNames(user)
//     })
// }).catch((err) => {
//     console.log(err)
// })

// function printUserNames(user) {
//     const trEl = document.createElement('tr')
//     const tdName = document.createElement('td')
//     const tdEmail = document.createElement('td')
//     const tdPhone = document.createElement('td')

//     tdName.innerText = user.name
//     tdEmail.innerText = user.email
//     tdPhone.innerText = user.phone

//     trEl.appendChild(tdName)
//     trEl.appendChild(tdEmail)
//     trEl.appendChild(tdPhone)

//     usersTable.appendChild(trEl)
// }

// const res = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: {
//         title: 'test',
//         body: 'aaaaa'
//     }
// })

// res.then((resi) => {
//     return resi.json()
// }).then(data => {
//     console.log(data)
// })

const res = fetch('https://jsonplaceholder.typicode.com/posts/95', {
    method: 'DELETE',
/*     body: {
        title: 'test',
    } */
})

res.then((resi) => {
    return resi.json()
}).then(data => {
    console.log("DELETED")
})