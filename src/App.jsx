function App() {
  return (
    <>
      {/* Intro */}
      <div id="intro" class="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-01.jpg">
        <nav id="tm-nav" class="fixed w-full">
          <div class="tm-container mx-auto px-2 md:py-6 text-right">
            <button class="md:hidden py-2 px-2" id="menu-toggle"><i class="fas fa-2x fa-bars tm-text-gold"></i></button>
            <ul class="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
              <li class="inline-block mb-4 mx-4"><a href="#intro" class="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
              <li class="inline-block mb-4 mx-4"><a href="#menu" class="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
              <li class="inline-block mb-4 mx-4"><a href="#about" class="tm-text-gold py-1 md:py-3 px-4">About</a></li>
              <li class="inline-block mb-4 mx-4"><a href="#contact" class="tm-text-gold py-1 md:py-3 px-4">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div class="container mx-auto px-2 tm-intro-width">
          <div class="sm:pb-60 sm:pt-48 py-20">
            <div class="bg-black bg-opacity-70 p-12 mb-5 text-center">
              <h1 class="text-white text-5xl tm-logo-font mb-5">Antique Cafe</h1>
              <p class="tm-text-gold tm-text-2xl">your daily energy booster</p>
            </div>
            <div class="bg-black bg-opacity-70 p-10 mb-5">
              <p class="text-white leading-8 text-sm font-light">
                This is a coffee shop template named Antique Cafe which is a parallax HTML5 template with a good responsiveness.
                Feel free to use this layout for your cafe.
                If you have any question, please <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">send us a message</a>. </p>
            </div>
            <div class="text-center">
              <div class="inline-block">
                <a href="#menu" class="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
                  <i class="fas fa-coffee mr-3"></i>
                  <span>Let's explore...</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu" class="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-02.jpg">
        <div class="container mx-auto tm-container py-24 sm:py-48">
          <div class="text-center mb-16">
            <h2 class="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">Our Cafe Menu</h2>
          </div>
          <div class="flex flex-col lg:flex-row justify-around items-center">
            <div class="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div class="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-1.jpg" alt="Image" class="rounded-md" />
                  <div class="ml-3 sm:ml-6">
                    <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Cappuccino</h3>
                    <div class="text-white text-md sm:text-lg font-light mb-1">S $8.50</div>
                    <div class="text-white text-md sm:text-lg font-light">L $10.50</div>
                  </div>
              </div>
              <div class="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-2.jpg" alt="Image" class="rounded-md" />
                  <div class="ml-3 sm:ml-6">
                    <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Americano</h3>
                    <div class="text-white text-md sm:text-lg font-light mb-1">S $9.50 . BG #544639</div>
                    <div class="text-white text-md sm:text-lg font-light">L $12.50</div>
                  </div>
              </div>
              <div class="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-3.jpg" alt="Image" class="rounded-md" />
                  <div class="ml-3 sm:ml-6">
                    <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Latte #FC6</h3>
                    <div class="text-white text-md sm:text-lg font-light mb-1">M $11.75</div>
                    <div class="text-white text-md sm:text-lg font-light">L $14.75</div>
                  </div>
              </div>
              <div class="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-4.jpg" alt="Image" class="rounded-md" />
                  <div class="ml-3 sm:ml-6">
                    <h3 class="text-lg sm:text-xl tm-text-yellow-1">Hot Espresso</h3>
                    <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Chocolate</h3>
                    <div class="text-white text-md sm:text-lg font-light">Size M $11.75 . L $14.75</div>
                  </div>
              </div>
            </div>
            <div class="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                <div class="text-right mr-6">
                  <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Cappuccino</h3>
                  <div class="text-white text-md sm:text-lg font-light mb-1">Small $10</div>
                  <div class="text-white text-md sm:text-lg font-light">Large $15</div>
                </div>
                <img src="img/menu-item-5.jpg" alt="Image" class="rounded-md" />
              </div>
              <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                <div class="text-right mr-6">
                  <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Americano</h3>
                  <div class="text-white text-md sm:text-lg font-light mb-1">Small $12.50</div>
                  <div class="text-white text-md sm:text-lg font-light">Large $16.50</div>
                </div>
                <img src="img/menu-item-6.jpg" alt="Image" class="rounded-md" />
              </div>
              <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                <div class="text-right mr-6">
                  <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Milky Latte</h3>
                  <div class="text-white text-md sm:text-lg font-light mb-1">Small $14</div>
                  <div class="text-white text-md sm:text-lg font-light">Large $18</div>
                </div>
                <img src="img/menu-item-7.jpg" alt="Image" class="rounded-md" />
              </div>
              <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                <div class="text-right mr-6">
                  <h3 class="text-lg sm:text-xl tm-text-yellow mb-1">Iced Espresso</h3>
                  <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Mocha</h3>
                  <div class="text-white text-md sm:text-lg font-light">Small $10 . Large $15</div>
                </div>
                <img src="img/menu-item-8.jpg" alt="Image" class="rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;