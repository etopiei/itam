<!DOCTYPE html>
<html lang="en">
<title>itam - Home</title>
<script type="text/javascript">
if (screen.width <= 699) {
document.location = "/mobile/mobile.html";
}
</script>
<script language=javascript>
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   location.replace("/mobile/mobile.html");
}
</script>
<link rel=StyleSheet href="css/bootstrap.min.css">
<link rel=StyleSheet href="css/style.css" type="text/css" media=screen>
<link rel="stylesheet" href="/font-awesome-4.6.3/css/font-awesome.min.css">
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/media/icons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/media/icons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/media/icons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/media/icons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/media/icons/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/media/icons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/media/icons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/media/icons/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="/media/icons/favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="/media/icons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="/media/icons/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/media/icons/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="/media/icons/favicon-128.png" sizes="128x128" />
<meta name="itam" content="&nbsp;"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="/media/icons/mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="/media/icons/mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="/media/icons/mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="/media/icons/mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="/media/icons/mstile-310x310.png" />
<script src="/js/jquery-min.js">

</script>
<script src="/js/bootstrap.min.js"></script>
<?php include "count.php";?>
<body>

    <div class="page">
        <div class="content">
            <div class="banner">
                <center>
                    <a href="index.php"><img src="media/itam-heading.png" width="80%" height="50%"> </img>
                    </a>
                    <br>
                    <p class="tag">Internet Television And Movies.</p>
                </center>
            </div>
            <div class="search-bar">
                <center>
                    <form onSubmit="return process();">
                        <input type="text" class="tftextinput" name="q" size="21" maxlength="120" id="searchTerm">
                        <input
                            type="submit" value="Search" class="tfbutton">
                    </form>

                    <script>
              function process()
              {
              var url="/search.html?=" + document.getElementById("searchTerm").value;
              location.href=url;
              return false;
              }
              </script>

                </center>
            </div>
            <div class="for-you">
                <!-- Rotating titles of just watched, placeholders for now -->
                <h4 class="title">Recommended</h4>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR1">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR1"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR2">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR2"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR3">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR3"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR4">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR4"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR5">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR5"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR6">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR6"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR7">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR7"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR8">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR8"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR9">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR9"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR10">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR10"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR11">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR11"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkR12">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterR12"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tv">
                <!-- Boxes for movie/tv things to go -->
                <h4 class="title">TV Shows</h4>
                <a class="see-all" href="more.html?=T">More</a>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT1">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT1"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT2">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT2"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT3">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT3"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT4">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT4"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT5">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT5"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT6">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT6"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT7">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT7"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT8">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT8"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT9">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT9"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT10">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT10"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT11">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT11"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkT12">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterT12"></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="movies">
                <!-- Boxes for movie/tv things to go -->
                <h4 class="title">Movies</h4>
                <a class="see-all" href="more.html?=M">More</a>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM1">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM1"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM2">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM2"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM3">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM3"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM4">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM4"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM5">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM5"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM6">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM6"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM7">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM7"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM8">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM8"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM9">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM9"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM10">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM10"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM11">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM11"></img>
                            </a>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                            <a href="" class="linkM12">
                                <img src="media/loader.gif" height=256 width=150 class="spaced posterM12"></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="footer">
            <center>
                <!-- About us section/social media links -->
                <a href="https://github.com/etopiei"> <span class="fa fa-github"></span> </a>
                <a href="https://twitter.com/etopiei"> <span class="fa fa-twitter"></span> </a>
                <a href="https://devolio-devchat.slack.com/team/etopiei"> <span class="fa fa-slack"></span> </a>
                <br>
                <p>Email: me.etopiei@gmail.com</p>
                  <p>itam will always be free, with no ads or data collection. However if you like itam, please consider donating to help
                    keep it running.</p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
      ">
                        <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_AU/i/scr/pixel.gif" width="1" height="1">
                    </form>
                    <p class="version-text"> itam (0.5) - &copy; etopiei 2016 </p>
            </center>
        </div>

    </div>

</body>
<script src="js/loadData.js">

</script>

</html>
