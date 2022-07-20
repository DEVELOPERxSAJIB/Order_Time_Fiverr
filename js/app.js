// get elemenets 
const fiverr_form = document.getElementById('fiverr');

// submit fiverr form
fiverr_form.onsubmit = (e) => {
    e.preventDefault();

    // get form val
    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());

    // get timestamps
    let start_time = new Date();
    let end_time = new Date(date + ' ' + time)

    console.log(end_time.getTime());
}