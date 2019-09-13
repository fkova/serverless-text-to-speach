//const apiEndpoint = "https://dzu0bd5gie.execute-api.us-east-2.amazonaws.com/Prod/api"
const apiEndpoint = "https://ph8xth52yj.execute-api.us-east-2.amazonaws.com/Prod/api"

$(document).ready(($)=> {
    $('.loader').show();
    updateList();

    $("#submitButton").click((e) => {
        e.preventDefault();
        $('#submitButton').prop('disabled', true);
        postText();
    });
});

const updateList = async () => {
    const result = await $.get(apiEndpoint+"/*").promise();
    let htmlContent = "";
    $('.loader').hide();

    for(const e of result.Items){
        htmlContent+=`
        <tr>
            <th scope="row" class="align-middle">${e.id}</th>
            <td class="align-middle">${e.voice}</td>
            <td class="align-middle">${e.text}</td>
            <td class="align-middle">${e.status}</td>
            <td>
                <audio controls>
                    <source src="${e.url}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </td>
        </tr>
        `;
    }

    $("#AudioTB").html(htmlContent);
}

const postText = async () => {
    var inputText = $('#textBox1').val();
    $('#textBox1').val(''); 
    $('.loader').show();
    
    await $.post(apiEndpoint, JSON.stringify({
        voice: "Amy",
        text: inputText
    })).promise()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    updateList()
}