// export default defineEventHandler(() => [
//     {id: 1, name: 'productOne'},
//     {id: 2, name: 'productTwo'}
// ])
const data = [
    {id: 5, name: 'productFive'},
    {id: 6, name: 'productSeven'}
]
export default defineEventHandler(() => {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 10000)
    })
})