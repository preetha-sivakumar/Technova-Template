import React from 'react'

import './Footer.css'
import logo from '../../assets/logowhite.png'


//  FONT AWESOME CSS FOR ICONS FONTS 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

    </link>
const Footer = () => {
  return (
    <div class="footerbody">
      <div className="footer">
        <div className="frow">
            <img src={logo} alt="" class ="footerlogo" />
            <p>Your ultimate destination for the latest breakthroughs in <br>
            </br>technology and innovation. We are dedicated to exploring 
            <br></br>and showcasing cutting-edge advancements that are <br />
            shaping the future.</p>
            <div class="social">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVR4nN2VMU4CQRSGEcR4DlpDbQI30MQQjGC4gPEASktoCBFPYCECegE7a0sOsOpq4hEEaj4zyRgnk7fzlsVG/mSb2e9//+68tzu53EYL2AGawAMQAQt7RXatYZisxY+Bd3TFQH2VwgVgwOq6AvJpArIU/1E/zbaE9AVcABWgBJSBR4+phRoa2vMlUBV8tx73JjbeTktIz97DnAFtYCqwJ1KAGbuQbhz2UmEnUsCLYuo67EhhIylgrpg6DnuvsHMpwHyhknbFqfj1PQmemQTGGQM+Bc+rBCa9dstMBbDnsPt27dSOr6+xFGDgtD2YKGxDCigCH38QEAPbSftZWzNgCRyFembM12sEDILFrXkr4Y/aUQL6xqsGOEUOvZ4kBRjmIHVh4fCpA0Pg3FnvAXf2XiFT8X+jb22Kfef0tLcPAAAAAElFTkSuQmCC"></img>
            &nbsp; &nbsp; &nbsp; 
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nN2VzUoCURTHp4+FuWpTPYEbfR83UZuglkmC9CD6CBmGLqJ9+g66iFlEoLUulXAjvzhwhmS4XzMqRH8YuHDv+f/OOTNzTxT9awFF4Bx4AGJgro+sO8AZcJDHeAe4Aj7wS85cZs1aMs6qjrcaYBfokV9PwJ4LcMv6atjMT4DpBgBfwLEJcOMJjIGZY3+8sq6ZAANH8EiyAioKSrQEHoGqnknUNwHeXebR77lD/RBaQEnBo3Q1JsDCZ56Wmg8NcYuQCpK2lIAm0JXsA8ytFfRT5lXtr/Q5kfS/7DEXPZsAtdUMHMHT1Is26doEOAI+2dZ/IALqGwDUI88tereGeVfuMytAIYWc5u3g2ZDReAJcBBlbALGW/gZ860R7Ae6B07wTTfQqkwrYz2wQAJA5bB8cf0k/lY7nXd0OCV0AAAAASUVORK5CYII="></img>
            &nbsp; &nbsp; &nbsp; 
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVR4nO2UvQrCMBCAO7lYfSCpqF1t8XEEcZNifRuprlUfxuqu7p8EbiglPWvi6AeBkLvmu+YvCP64ACyAC/DiMybnDKRdJ89xJ+tSuQsjIJJ+ognMsrgQAWPpnzTBs2WCPTAB+tKmQNGS+9AENpZK/sr2wTeCvYz3gB1wAyo5CD2JHXwEE+Vk5RKb+QhCGTeVN7lLbPALQWWJXSU29BFMlSXaSiz2ERS1Tc7lT5qbfPQRGFZK/hoLLhftIKcllBbbKu9y0cyr6EupCdIfCOatApFkHpNv1MlrksS8isqe1DE55cfK/wQtvAGJl1RkrLoOqwAAAABJRU5ErkJggg=="></img>
            &nbsp; &nbsp; &nbsp; 
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHUlEQVR4nO3UvStGUQDHcS89RGRgNPoHjBgloz+ARUb5G+QpZTJgs1EGm41V3gaZLAolg1IiA+Xto1NnkO557n2eZ5B6vtu955zf99xf556mpgb/DnSijEu84So+d6ANE5hPLV5Be074sWyC6CmK+7MWN+MdO+hOCMoq84p1zKZ2+BAnhl2MZIyH93lsoJQSrP6afIRpDMSOP3LCv0ITqYqDoAv7auc5GR4FCxjFYY2CizzBpvrYyhOEig7qEExWFERJC2YqnPcUd+E/KSLYxjVeklHZzOWGR0EvdqsM30NrIcEP0SCW8JkTfo6+oqGl+AVDWMRjgZ33FA0fx1nBSm4wFQ5EVbVE0TCWcYr7eCXf4gRrGAvXctXBDf6Mb7qxe/M/XCA6AAAAAElFTkSuQmCC"></img>

                      </div>
      
            </div>

            <div className="frow">
               <h2>QUICK LINKS</h2>
               <hr  class="vertical"/>
               <ul>
               <li><a href="../../Service">Service</a></li>
               <li><a href="../../Prod">Products</a></li>

               
               <li><a href="../../About">Contact Us</a></li>
               </ul>
           
            
                      </div>
             <div className="frow">
               <h2>CONTACT US</h2>
               <hr  class="vertical"/>
               <ul>
               <li><img  class="i" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD20lEQVR4nO2YTWhVRxTHb6KNGK2xpcWYUHRTpUZabN34iV2nTdS2LtpdVi2luyTSjaIxKUJBIoIJRN1robSlm6ZRbBHc2YXFfkBbP8B+qNTEtBVJfnLw/2B8vnvv3Ju5Ly/FPwxc3pnzP+e8OTNn5kTRY/zPAawGdgNfA5eAOxr2PQr0AquiWgWwHhjDHxboK1GtAHgCOAJMy8GbwAjQodVZpGHfncAxzUE6h4H5sx3EU8BpOTUJ9AFLPPSWAAeAf5zVWVodryuvRCmVrllq5eB4CfhNHGeBhmK8TXbC0slwBWiZAU8LcFVcg2G99NvY00qndQH4XlaaTdl3GC/9DJdSqi8gZ784R0Nxphlc7ZxOsRsbeE0BWw2Z0Hd7wvwm4Ja4ny8sAMegFTvDsYQ5diLFIXYVgROa01NYAI4xq86GzoSVMPwHdAPLNXr0G3ErA+yQ/KtqBPKjjFW8Zjh1pbuCzK4nhrGUtP2hCN/LjVm+GxanyJsryJolG4/RXSz5RBG+lxsrVeOFMfJxyZdXkLVKdjtGd5Hkk0X4Xm7MqrhhRcrR3JNwUMSl1krJrxbhe7mxsykbtt3Z7L2q3C0K4m6K7uuSn6lGIIMydiBhTl/O43dAcw4VFoBj7A0Z+z5lXrvSbMKnIErnkrh3BHc85gpeSpG1AXlfFKdxPxmKN83olzK6LyDnfnF+EYrTx+guGf0JqA/AVw/8LM63wnjpZ3gB8LsMdwTgsyew4bpxh/HS3/iHMv5tAK5z4todxrvsm/5vObBhBjybStWeWXy3fywnPp0Bx+fiOBjWu2xOtOruZc/ejTn0NyuIyUp3s6rCeaKeB+py7o39xXnoCSteOm0MOzPovSmdP3x6YVUB8J5TVxZ4Ht821/BuVCsA5gMXfdPEuVReLLxdCtQBv5CMbWUbd1p3pbYE3rWaY3NfLTuGpxNsXc66B0vEW1KCeOQfBY47G39ezFWktMFHnN/nAd952NuSJ5AhKfdn0Hka+FN671eQfyDZDeCZDLwD0hvKEoMpNjit/7aMuu84lfo55/cVznv+7YycbdK7manRDWyX4oUsBh39T6T/jdKm3mkTfZaT80JSPy1O6VRcb8pT/1nVB8MeYK++/wKW5eTsFsdJXwXrwf6rznhrHqNlXcN7GjN6wvLgOjQl35p8FLqSWjY5DwzD0QB8Y+LqCjs5navRmhQajQH4urz+5MzL52f8BRuBuJq80l4dc8OpqEaBz0HkVNftUY2CtNIArNGEW1VvAGQv1jdi+2rARxIORzUOYFi+DlS66f7K3MPlh/pqwFbmLrbOQlI8RpSG+1XxhXP12wwDAAAAAElFTkSuQmCC">
               </img> &nbsp;123 Innovation Drive, Futurity City, FC 78910 USA </li>
                  
               <li><img class ="i"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAz0lEQVR4nO3U32nCUBiG8aB3hTqAELpCQXCGShG86QpdwRW6giv0xgunEApdQVIdoAXvWn4SOaVB8k+NxYs8cOAj7+F9yBdIFLVcDXjE2vl8YJQnSIOmSPIEexrYxJ7CAAvcnVDcx2sdQcoWU3RrFHfwjK9sQZlgjFWY3zEsKb/HMtzd4KlSEOYbvOAbP5ihl7mbl98e9hQKMs8GeAtRgkk46Sxkg6qe0sDfjj/rfKOjBb8gxjycOCrgZEFdWsFZK7r4z27UkCTBQ/W7tvwXOxHIwZ862fi3AAAAAElFTkSuQmCC">
               </img> &nbsp;technova@gmail.com</li>
                <li><img class ="i" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADh0lEQVR4nO2ZS0hVURSGt70Mo5TK0rQig0ZChYM0aVBEkygIqSARUxKFXsNoLI4qjMJKqEnNKjIregyiaGAPQRMiegx6UBFUWlloD/ti4Tq4Mc+559TxtoX7D+/99z7/Pnuvtf69jjEppPD/AKwH2oF+oAsoMWMJwCSgiT/RA+SZsQAgE7iuwvuAHcBMoFV/u2xcB5AD3FfBr4GiYf+91/+qjasApgEdKvQhMH8ETrn+/xGYZ1wDkA7cUpEPgBkB3BZnjxjQoOJeAPkJuHLEPii/0rgEoFuFrQzJr1C+jMs1roDBOiHIijDmko5pMa4AeKqiCiOMydegF2w2LoChAC6POK5Gxz02LoDBoic4GXGcFErBTyBt9BSGBLAQ+AV8BqZGGLdVF9JuXAFDtqQuJH8y8Ny5NAxs8s47MCEEf6/yO4FxxhUA49WaCGoTcGcBn5S72rgGoEzFvQEyAnjNyms1LgJIA+6qyH0BsdGrnG3GVQBLge/AALDCh7PLumgtMK4CqLcCP8Nn5y4q517QMXThqtulQpt8OFlWcjgvycK4CGCJXnUFVQGF9J1ymp2o7iNBFqAiZUHLfDglVvA3GlcBHLJS8ogdFGCVtXsHjIsAJgI3VGSbX2AD6zTbCRqMiwCygWcq8ookAx/eRmsxjU7GDLAIeKsiT/tlKd0Z75gdczKbAYu1CAqO+71xjZleKzVn+Hi7KjWdA8ATMa5JWYgKWA58SRTYQLGVmtvtPpkYTatODcdZYHayFrMG+OYtJmBnCqyi2a1XY88RoHFXqTfNGstRS0dzS7IWs8FazImAmBEHcGHYWxfBe8SADuPO1WTiQXoJOcnaGe+YnQnIZuLNdmrcHJX7TIJ5q61YlGZgxagtwnpoqfXQqwnuMekR5s2zemfokZwTm/AAX+al5ttxdh8ZjCGvE9rjZ5XirjNeM+JVnA8Ecq0k0RnXvIkcwE19YL+fa/7LuafrvF/jmjOMNztsne0jcVy8gN06X1s8SsM/uMpqjkvVLv2HuYqtVL82XqXhk4BXwcWG7AemRJyjwEokB0dPbbhrs/QAflj3mtqQTcBs4JGOuybHNjmqg0UVAXes2JHGRp1fr5nBKu/Zm44oPelRh1b4Musto43zU/qhtVA/j4t7fuml26SZyKiQYyUfh7RxLl8B/CCpPNOMBWgwbwfOaXbrU/dbH8XSpJCCiRe/AQGfCXGn/vU8AAAAAElFTkSuQmCC">
               </img> &nbsp; 999-999-9999</li>
               </ul>
           
            
                      </div>  
     </div>
  </div>
  )
}

export default Footer