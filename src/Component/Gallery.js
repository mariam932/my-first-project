import React from 'react'
import logo from "./Image/1.webp";
import './CSS/Gallery.css'
function Gallery() {
  return (
    <div>
        <header>
          <div class="container1">
            <div class="logo">
              <img src={logo} alt="logo" />
            </div>
            <div id="container-header">
              <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search ............."
                  title="Type in a name"/>
            </div>
          </div>
        </header>
        <div class="gallery">
          <h1>Furniture Gallery</h1>
          <div class="container">
            <div class="item" >
              <img src="https://assets.wfcdn.com/im/79170991/compr-r85/2449/244983496/kano-large-velvet-sofa.jpg"
                alt="Furniture 1"/>
              <h6>Sofa</h6>
              <p>Price: $260</p>
              <p>Color: blue</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://housing.com/news/wp-content/uploads/2022/11/stylish-modern-sofa-design-compressed.jpg"
                alt="Furniture 2"/>
              <h6>sofa</h6>
              <p>Price: $399.99</p>
              <p>Color: white</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://s.alicdn.com/@sc04/kf/HTB1QXfImER1BeNjy0Fmq6z0wVXaM.jpg_720x720q50.jpg" alt="Furniture 3"/>
              <h6>Sofa</h6>
              <p>Price: $299.99</p>
              <p>Color: stone</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.at-home.co.in/cdn/shop/products/Roslin3strLS.jpg?v=1678423595" alt="Furniture 4"/>
              <h6>Sofa</h6>
              <p>Price: $299.99</p>
              <p>Color: khaki</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://sofasofa.co.uk/cdn/shop/products/MorganRoomsetColours7.jpg?v=1660730000" alt="Furniture 5"/>
              <h6>sofa</h6>
              <p>Price: $299.99</p>
              <p>Color: baby bink</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.woods-furniture.co.uk/images/products/large/10066_24683.jpg" alt="Furniture 6"/>
              <h6>sofa</h6>
              <p>Price: $320</p>
              <p>Color:brown </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-78972,msid-99739311/fentonpremiumsofa4.jpg?from=mdr"
                alt="Furniture 6"/>
              <h6>sofa</h6>
              <p>Price: $222</p>
              <p>Color:light brown </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/51mmrjhqOqL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="Furniture 7"/>
              <h6>sofa</h6>
              <p>Price: $280</p>
              <p>Color:grey </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.furnitureworld.co.uk/images/products/standard/9884_29894.jpg?t=1663797109"
                alt="Furniture 8"/>
              <h6>sofa</h6>
              <p>Price: $310</p>
              <p>Color: blue green </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://5.imimg.com/data5/ANDROID/Default/2022/3/HF/LR/EU/98421175/product-jpeg-500x500.jpg"
                alt="Furniture 9"/>
              <h6>sofa</h6>
              <p>Price: $270</p>
              <p>Color:rose </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.sofology.co.uk/c_scale,w_460,q_70,dpr_3,fl_lossy,f_auto/productmedia/lifestyle/sku001018982.jpg"
                alt="Furniture 10"/>
              <h6>sofa</h6>
              <p>Price: $290</p>
              <p>Color:forest green </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Farbor-3-seater-sofa%2Fnew-desgin%2Fdark-olive-green%2F3-seater%2Fupdate%2F2-750x650.jpg"
                alt="Furniture 11"/>
              <h6>sofa</h6>
              <p>Price: $310</p>
              <p>Color:dark green </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/gray-bedroom-ideas-section-2.jpg"
                alt="Furniture 12"/>
              <h6>bed</h6>
              <p>Price: $250</p>
              <p>Color: white with grey</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.ikea.com/eg/en/images/products/malm-ottoman-bed-white__1154392_pe886041_s5.jpg?f=s" alt=''/>
              <h6>bed</h6>
              <p>Price: $230 </p>
              <p>Color: white</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://lifely.com.au/cdn/shop/products/LanaGallery2_75ad2ca2-e8b8-4ead-9121-41c0c4d86dad_grande.png?v=1680044358" alt=''/>
              <h6>bed</h6>
              <p>Price: $300 </p>
              <p>Color: light wood</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://cdn11.bigcommerce.com/s-31djhj4ixx/images/stencil/1280x1280/products/13765/10721/Mocka_Imogen_Single_Bed_Grey_1__34833.1647289508.jpg?c=1" alt=''/>
              <h6>bed</h6>
              <p>Price: $280 </p>
              <p>Color: baby blue</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://storage.googleapis.com/bedworldcdn/2020/09/33a65c52-pettine-pink.jpg" alt="Furniture 13"/>
              <h6>bed</h6>
              <p>Price: $300</p>
              <p>Color: pink</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://www.ezlivingfurniture.ie/media/catalog/product/1/3/133127_1_lunar-mustard-front.jpg?auto=webp&format=pjpg&width=450&height=562.5&fit=cover"
                alt="Furniture 14"/>
              <h6>bed</h6>
              <p>Price: $320</p>
              <p>Color: golden yellow</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.bedco.co.uk/wp-content/uploads/2021/06/image2-1.jpeg" alt="Furniture 14"/>
              <h6>bed</h6>
              <p>Price: $350</p>
              <p>Color: grey</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.thdstatic.com/productImages/17be8f8a-a2a4-4a10-9289-e4675a1f638d/svn/navy-furniture-of-america-panel-beds-idf-7245nv-q-31_600.jpg"
                alt="Furniture 15"/>
              <h6>bed</h6>
              <p>Price: $399.99</p>
              <p>Color: navy</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.woodenstreet.de/image/cache/data%2Fsingle-beds%2Fadolph-single-bed-without-storage%2Fupdated%2Fhoney%2F1-750x650.jpg"
                alt="Furniture 16"/>
              <h6>bed</h6>
              <p>Price: $299.99</p>
              <p>Color: wood</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1558170-847&recipeName=680"
                alt="Furniture 17"/>
              <h6>bed</h6>
              <p>Price: $330</p>
              <p>Color: wite</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.laura-james.co.uk/cdn/shop/products/Sheffield_Chair_Brown_Main_2_2000x.jpg?v=1632134785"
                alt="Furniture 18"/>
              <h6>Chair</h6>
              <p>Price: $99.99</p>
              <p>Color: Brown</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://cdn11.bigcommerce.com/s-fj5u5hhzyb/images/stencil/1280x1280/products/27344/15466/Boucle_Occasional_Chair_Lores_01__42203.1688603741.jpg?c=1"
                alt="Furniture 19"/>
              <h6>Chair</h6>
              <p>Price: $150</p>
              <p>Color: white</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://grene-prod-contenthub-media.azureedge.net/odjk0ejj/chair-blue-2-v1.jpg?format=jpg&width=1024&height=1731&quality=75&mode=crop&rxy=0.5,0.5"
                alt="Furniture 20"/>
              <h6>Chair</h6>
              <p>Price: $120</p>
              <p>Color: stone </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://i.ebayimg.com/images/g/W-QAAOSwk6hjRRCZ/s-l1600.jpg" alt="Furniture 21"/>
              <h6>Chair</h6>
              <p>Price: $199.99</p>
              <p>Color:camle </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/51V92RkaGrL.jpg" alt="Furniture 22"/>
              <h6>Chair</h6>
              <p>Price: $150</p>
              <p>Color: rauge </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://ak1.ostkcdn.com/images/products/is/images/direct/0b5ccfc733c90bd045dbefeb4d6431abd7161a47/angelo%3AHOME-Twila-Scalloped-Back-Chair.jpg?impolicy=medium"
                alt="Furniture 23"/>
              <h6>Chair</h6>
              <p>Price: $144</p>
              <p>Color: mauve</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.vegashomefurniture.com/wp-content/uploads/2019/01/903034-600x600.jpeg" alt="Furniture 24"/>
              <h6>Chair</h6>
              <p>Price: $120</p>
              <p>Color:azure </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.thdstatic.com/productImages/37f7c4b0-841d-46c9-a7f9-40e6669e88ad/svn/green-homefun-accent-chairs-hfhdsn-122gn-44_600.jpg"
                alt="Furniture 25"/>
              <h6>Chair</h6>
              <p>Price: $120</p>
              <p>Color: green </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://www.adairs.com.au/globalassets/13.-ecommerce/03.-product-images/2023_images/furniture/coffee--side-tables/48099_noak_new_1.jpg?width=1920&mode=crop&heightratio=1&quality=80"
                alt="Furniture 26"/>
              <h6>table</h6>
              <p>Price: $150</p>
              <p>Color: light wood</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://images.woodenstreet.de/image/cache/data%2Fdining-tables%2Ftim-extendable-revised%2Fhoney%2Fupdated%2F1-810x702.jpg"
                alt="Furniture 27"/>
              <h6>table</h6>
              <p>Price: $110</p>
              <p>Color:brown sugar </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.decornation.in/wp-content/uploads/2020/01/designer-home-writing-desk.jpg"
                alt="Furniture 28"/>
              <h6>table</h6>
              <p>Price: $180</p>
              <p>Color: white </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://furniturestore.ae/wp-content/uploads/2021/12/30-2.jpg" alt="Furniture 29"/>
              <h6>table</h6>
              <p>Price: $200</p>
              <p>Color:black with gold </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://www.casabellafurniture.co.uk/media/catalog/product/cache/3acc1ee2155e58c90c1f8f3b0f6a29ed/h/y/hyggemangomediumsideboard1.jpg"
                alt="Furniture 30"/>
              <h6>table</h6>
              <p>Price: $180</p>
              <p>Color: beige </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/4Coffee_Table.jpg/640px-4Coffee_Table.jpg"
                alt="Furniture 31"/>
              <h6>Table</h6>
              <p>Price: $149.99</p>
              <p>Color: White</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://ak1.ostkcdn.com/images/products/is/images/direct/ae4e5f9d8e517bb0e4a0a6950a08371169319b78/Coffee-Table-with-Oval-Glass-Top-High-Gloss-Black.jpg"
                alt="Furniture 32"/>
              <h6>Table</h6>
              <p>Price: $199.99</p>
              <p>Color: black</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://i.pinimg.com/originals/39/5f/70/395f706dd6357e03b8f0e475a484ef18.jpg" alt="Furniture 33"/>
              <h6>Table</h6>
              <p>Price: $170</p>
              <p>Color: White</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/71thHf4kTML._AC_UF894,1000_QL80_DpWeblab_.jpg" alt="Furniture 34"/>
              <h6>Table</h6>
              <p>Price: $160</p>
              <p>Color: brown with White</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://cdn.shopify.com/s/files/1/0558/5557/9327/products/1_0b4b2fb4-5896-4c00-9a81-3c6fa2268591.jpg?v=1657994254S"
                alt="Furniture 35"/>
              <h6>table</h6>
              <p>Price: $155</p>
              <p>Color: white with gold </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/41ATlsKXeQL._AC_UF894,1000_QL80_.jpg" alt="Furniture 36"/>
              <h6> Electrolier </h6>
              <p>Price: $120</p>
              <p>Color: silver</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/41iT9uGJ8LL._AC_UF1000,1000_QL80_.jpg" alt="Furniture 37"/>
              <h6> Electrolier </h6>
              <p>Price: $150</p>
              <p>Color: black</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.horchow.com/products/mp/HCD3325_mp.jpg" alt="Furniture 38"/>
              <h6> Electrolier </h6>
              <p>Price: $220</p>
              <p>Color: gold with black</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.universe-magic.com/images/2018/04/najaf-modern_2160_3_1524900126.jpg" alt="Furniture 39"/>
              <h6> Electrolier </h6>
              <p>Price: $120</p>
              <p>Color: baby blue</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.universe-magic.com/images/2014/08/226-1-or-1408125377.jpg" alt="Furniture 40"/>
              <h6> Electrolier </h6>
              <p>Price: $300</p>
              <p>Color: white</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://firasf.com/wp-content/uploads/2021/09/63388-wvct2n.jpg" alt="Furniture 41"/>
              <h6> Electrolier </h6>
              <p>Price: $120</p>
              <p>Color: silver</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://ae01.alicdn.com/kf/HTB1i_H3aYZnBKNjSZFGq6zt3FXaw.jpg_640x640q90.jpg" alt="Furniture 42"/>
              <h6> Electrolier </h6>
              <p>Price: $150</p>
              <p>Color: silver</p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://images.ntpl.org.uk/hppa-zooms/00000000339/cms_tin06436.bro" alt="Furniture 43"/>
              <h6> Electrolier </h6>
              <p>Price: $199</p>
              <p>Color: gold </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://theacaciatree.com.au/cdn/shop/products/DSC00377.jpg?v=1669698961" alt="Furniture 44"/>
              <h6>mirror</h6>
              <p>Price: $150</p>
              <p>Color:light wood </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://www.thespruce.com/thmb/ekL5dGscjl9HUsl4GzCro8ot7KY=/805x0/filters:no_upscale():max_bytes(150000):strip_icc()/jellyandjonny1-0d407b5529474a4b9ad8ee58fc71e718.jpg"
                alt="Furniture 45"/>
              <h6>mirror</h6>
              <p>Price: $185</p>
              <p>Color: gold </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/676/D39925.jpg?im=Resize,width=350"
                alt="Furniture 46"/>
              <h6>mirror</h6>
              <p>Price: $130</p>
              <p>Color:black </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://media.bouclair.com/image/upload/w_auto,q_auto,dpr_auto/products/images/highres/9396885_96"
                alt="Furniture 47"/>
              <h6>mirror</h6>
              <p>Price: $170</p>
              <p>Color: brown </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/71fV9e8LEnL._AC_UF1000,1000_QL80_.jpg" alt="Furniture 48"/>
              <h6>mirror</h6>
              <p>Price: $175</p>
              <p>Color: gold </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://www.roseandgrey.co.uk/media/catalog/product/w/i/wiggly_full_length_mirror_1.jpg?width=600&height=780&store=default&image-type=image"
                alt="Furniture 49"/>
              <h6>mirror</h6>
              <p>Price: $199.99</p>
              <p>Color: light wood </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img
                src="https://melbournemirrors.com.au/wp-content/uploads/2021/11/Mirrors-Melbourne-new-modernish-pewter-French-Provincial-total-length-700x933.jpg"
                alt="Furniture 50"/>
              <h6>mirror</h6>
              <p>Price: $180</p>
              <p>Color: silver </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://www.livelaughlove.co.uk/cdn/shop/collections/shabby-chic-mirrors-903012.jpg?v=1643889777"
                alt="Furniture 51"/>
              <h6>mirror</h6>
              <p>Price: $120</p>
              <p>Color: gold with silver </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://m.media-amazon.com/images/I/61ebqy7pqNL.jpg" alt="Furniture 52"/>
              <h6>mirror</h6>
              <p>Price: $178</p>
              <p>Color: printed </p>
              <button>Add to Cart</button>
            </div>
            <div class="item">
              <img src="https://5.imimg.com/data5/SELLER/Default/2022/2/MS/AY/OD/9304992/full-length-500x500.jpg"
                alt="Furniture 53"/>
              <h6>mirror</h6>
                <p>Price: $150</p>
                <p>Color: blacl </p>
                <button>Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Gallery
