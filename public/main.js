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
    const result = await $.get("https://dzu0bd5gie.execute-api.us-east-2.amazonaws.com/Prod/api/*").promise();
    let htmlContent = "";
    $('.loader').hide();

    for(const e of result.Items){
        htmlContent+=`
        <tr>
            <th scope="row">${e.id}</th>
            <td>${e.voice}</td>
            <td>${e.text}</td>
            <td>${e.status}</td>
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

    
    await $.post("https://dzu0bd5gie.execute-api.us-east-2.amazonaws.com/Prod/api", JSON.stringify({
        voice: "Amy",
        text: inputText
    })).promise()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    updateList()
}