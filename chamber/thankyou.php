<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thank You</title>
    <link rel="stylesheet" href="styles/directory.css">
    <script src="scripts/directory.js" defer></script>
    <!-- Facebook Open Graph meta tags -->
    <meta property="og:title" content="Chamber of Commerce Directory">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://ssmithope.github.io/wdd231/chamber/images/image.jpg">
    <meta property="og:url" content="https://ssmithope.github.io/wdd231/chamber/directory.html">
    <!-- Font Awesome for social media icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo-title">
            <img src="images/logo.jpg" alt="Logo" class="logo">
            <div class="title">
                <h1>Timbuktu</h1>
                <p>Chamber of Commerce</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="directory.html">Directory</a></li>
                <li><a href="join.html">Join</a></li>
                <li><a href="discover.html">Discover</a></li>
            </ul>
        </nav>
    </header>    
    <main>
        <h1>Thank You for Joining Us!</h1>
        <p>Here is the information you submitted:</p>
        <ul>
            <li>First Name: <?php echo htmlspecialchars($_GET['first-name']); ?></li>
            <li>Last Name: <?php echo htmlspecialchars($_GET['last-name']); ?></li>
            <li>Email: <?php echo htmlspecialchars($_GET['email']); ?></li>
            <li>Mobile Phone: <?php echo htmlspecialchars($_GET['phone']); ?></li>
            <li>Organization: <?php echo htmlspecialchars($_GET['organization']); ?></li>
            <li>Timestamp: <?php echo htmlspecialchars($_GET['timestamp']); ?></li>
        </ul>
    </main>
    <footer>
        <div class="footer-left">
            <p>Timbuktu Chamber of Commerce</p>
            <p>10 Rue De la Paix</p>
            <p>Timbuktu, Mali 999</p>
            <p>info@timbuktucc.org</p>
            <p>(223) 555-2300</p>
        </div>
        <div class="footer-center">
            <div class="social-media">
                <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="footer-right">
            <p>WDD231 Class Project</p>
            <p>Smith Eutrope Zephirin</p>
            <p>&copy; 2024 Timbuktu Chamber of Commerce</p>
            <p>&copy; <span id="currentyear"></span> | Last Updated: <span id="lastModified"></span></p>
        </div>
    </footer>
</body>
</html>