// export default defineEventHandler(() => [
//     {id: 1, name: 'productOne'},
//     {id: 2, name: 'productTwo'}
// ])
const data = [
    {id: 1, name: 'productOne'},
    {id: 2, name: 'productTwo'}
]
export default defineEventHandler(() => {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
})