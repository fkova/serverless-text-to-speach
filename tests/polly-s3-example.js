const AWS = require('aws-sdk');

const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-2'
})

const s3 = new AWS.S3();

let pollyparams = {
    'Text':     
        `<speak>Hello, this is an example Node.js script which plays an audio stream converted by AWS Polly. 
            <amazon:effect name="whispered">
                <prosody rate="slow">It is really cool.</prosody>
            </amazon:effect>
        </speak>`,
    'TextType': "ssml",
    'OutputFormat': 'mp3',
    'VoiceId': 'Amy'
}

Polly.synthesizeSpeech(pollyparams, (err, data) => {
    if (err) {
        console.log(err.message)
    } else if (data) {
        let s3params = {
            Body: data.AudioStream,
            Bucket: "tts-microservice-audiobucket-19rtxyzbdsoi1",
            Key: "testaudio.mp3",
            ACL: "public-read"
        };

        s3.upload(s3params, function (err, data) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(data.Location);
            }
        });
    }
});
