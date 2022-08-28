function mynavbar(){
    return `<div class="left2">
    <img  src="./components/logo.png" alt="">
        <p>For Entrepreneur </p>
        <select name="" id="fees_page">
            <option value="" hidden>How it works</option>
            <option value="">Campaign</option>
            <option value="">In Demand</option>
            <option value="">China Program</option>
            <option value="fees">Fees</option>
            <option value="">Community</option>
        </select>
        <select name="" id="resource_page">
            <option value="" hidden>Resources</option>
            <option value="education">Education Center</option>
            <option value="">Expert Directory</option>
            <option value="">Help & Support</option>
            <option value="">Trust & Safety</option>
            
        </select>
        <select name="" id="">
            <option value="" hidden>About Us</option>
            <option value="">Indiegogo vs Kickstarter</option>
            <option value="">Press</option>
            <option value="">About us</option>               
        </select>
    </div>
    <div class="right2">
        <button>Start a Campaign</button>
        <h3>Log In</h3>
        <h3>Sign Up</h3>
</div>`
}
export default mynavbar;