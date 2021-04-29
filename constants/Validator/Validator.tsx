export default function validate(data: Array<string>, root_data: any) {
    let data_to_return:boolean = true
    data.forEach(element => {
        if(!root_data[element]) {
            data_to_return = false
        }
    });
    return data_to_return
}