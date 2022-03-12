const images = [
    'images/abc-(1).jpg',
    'images/abc-(2).jpg',
    'images/abc-(3).jpg',
    'images/abc-(4).jpg',
    'images/abc-(5).jpg',
    'images/abc-(6).jpg',
    'images/abc-(7).jpg',
    'images/abc-(8).jpg',
    'images/abc-(9).jpg',
    'images/abc-(10).jpg',
    'images/abc-(11).jpg',
    'images/abc-(12).jpg',
    'images/abc-(13).jpg',
    'images/abc-(14).jpg',
    'images/abc-(15).jpg',
    'images/abc-(16).jpg',
    'images/abc-(17).jpg',
    'images/abc-(18).jpg',
    'images/abc-(19).jpg',
    'images/abc-(20).jpg',
    'images/abc-(21).jpg',
    'images/abc-(22).jpg',
    'images/abc-(23).jpg',
    'images/abc-(24).jpg',
    'images/abc-(25).jpg',
    'images/abc-(26).jpg',
    'images/abc-(27).jpg',
    'images/abc-(28).jpg',
    'images/abc-(29).jpg',
    'images/abc-(30).jpg',
    'images/abc-(31).jpg',
    'images/abc-(32).jpg',
    'images/abc-(33).jpg',
    'images/abc-(34).jpg',
    'images/abc-(35).jpg',
    'images/abc-(36).jpg',
    'images/abc-(37).jpg',
    'images/abc-(38).jpg',
    'images/abc-(39).jpg',
    'images/abc-(40).jpg',
    'images/abc-(41).jpg',
    'images/abc-(42).jpg',
    'images/abc-(43).jpg',
    'images/abc-(44).jpg',
    'images/abc-(45).jpg',
    'images/abc-(46).jpg',
    'images/abc-(47).jpg',
    'images/abc-(48).jpg',
    'images/abc-(49).jpg',
    'images/abc-(50).gif',
];

let imageIndex = 0;
const imageSlide = document.getElementById('slider');


const startSlider = () => {
    document.getElementById('btn').style.display = 'none';
    const slide = setInterval(() => {

        const imageUrl = images[imageIndex];
        imageSlide.setAttribute('src', imageUrl);
        imageIndex++;
        if (imageIndex >= images.length) {
            clearInterval(slide);
            document.getElementById('btn').style.display = 'block';
        }
    }, 1000);
}