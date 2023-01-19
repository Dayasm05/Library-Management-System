import '../Styles/userdashdb.css'


const Userdashboard = () => {
    return (
        <div className="user_dashboard">
            <div className="userdb_heading">
                <h1>Welcome to user Dashboard</h1>
            </div>
            <div className="userdb_content1">
                <h1>Learning Lab</h1>
                <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
            </div><br />
            <div className="userdb_content2">
                <img height="300px" width="850px" src="https://marvel-b1-cdn.bc0a.com/f00000000164722/www.udel.edu/content/dam/udelImages/human-resources/employeedevelopment/LinkedInLearning/LILHero.jpg/_jcr_content/renditions/original" alt="" />
                <div className="userdb_text">
                    <h1>LinkedIn Learning</h1>
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video <br /> tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                </div>
                <div className="userdb_content3">
                    {/* <img src="/Images/photoo.svg" alt="image"  /> */}
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Userdashboard;