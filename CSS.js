//NURETTİN GÜNGÖR CSS V1.0

import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    boyut: {
        width   : 1,   //bileşen için genişlik :: 50, '20%', 'auto'
        minWidth: 1,   //bileşen genişliği min bu kadar olsun
        maxWidth: 1,   //bileşen genişliği max bu kadar olsun

        height   : 1,   //bileşen için yükseklik :: 50, '20%', 'auto'
        minHeight: 1,   //bileşen yüksekliği min bu kadar olsun
        maxHeight: 1,   //bileşen yüksekliği max bu kadar olsun

        flex: 1  //parent bileşenden kalan yerleri kapla
        //eğer bir parent da iki tane child varsa, childların birine flex: 1, diğerine de flex: 2 yazılırsa,
        //child lardam biri kalan yerin 1/3'ünü, diğeri ise 2/3'ünü kaplar. Bir oranlama söz konusu.
    },


    temel: {
        backgroundColor: '',   //bileşen arka plan rengi :: 'red', '#FF00FF', 'rgb(255,0,0)', 'rgba(255,255,0,0.6)'
        color          : '',   //bileşen için renk :: 'red', '#FF00FF', 'rgb(255,0,0)', 'rgba(255,255,0,0.6)'
        overflow       : '',   //bileşenin child ları, bileşenin dışına taşarsa ne yapsın :: 'hidden', 'visible'
        zIndex         : 1,    //üst üste gelen bileşenlerde kullanılır, bileşenin 3. boyuttaki indeksi, büyük olan üstte, küçük olan ise altta görünür
        //en çok position: 'absoute' ile ihtiyaç duyulur
    },


    yazi: {
        fontSize          : 1,    //yazı tipi boyutu
        fontWeight        : '',   //yazı tipi kalınlığı, :: '100', '200', ..., '900', 'bold', 'normal'
        textDecorationLine: '',   //ya<ı çizgisi :: 'underline'
    },


    kenarlik: {
        borderWidth      : 1,   //tüm kenarlar için kenarlık boyutu,
        borderBottomWidth: 1,
        borderTopWidth   : 1,
        borderLeftWidth  : 1,
        borderRightWidth : 1,

        borderColor      : '',   //kenarlık rengi
        borderBottomColor: '',
        borderTopColor   : '',
        borderLeftColor  : '',
        borderRightColor : '',


        borderRadius           : 1,   //köşelerin yuvarlaklığı
        borderTopLeftRadius    : 1,
        borderTopRightRadius   : 1,
        borderBottomLeftRadius : 1,
        borderBottomRightRadius: 1
    },


    margin: { //hepsinin default değeri : 0
        margin      : 1,   //bileşen dış boşluk (4 kenar birden)
        marginBottom: 1,   //alt
        marginTop   : 1,   //üst
        marginLeft  : 1,   //sol
        marginRight : 1,   //sağ
    },


    padding: { //hepsinin default değeri : 0
        padding      : 1,   //bleşen iç boşluk (4 kenar birden)
        paddingBottom: 1,   //alt
        paddingTop   : 1,   //üst
        paddingLeft  : 1,   //sol
        paddingRight : 1,   //sağ
    },


    pozisyon: {
        position: '',   //bileşen pozisyon biçimi :: 'absolute', 'relative' (default : 'relative')
        left    : 0,    //bileşenin, parent ın sol kenarından uzaklığı
        right   : 0,    //bileşenin, parent ın sağ kenarından uzaklığı
        top     : 0,    //bileşenin, parent ın üst kenarından uzaklığı
        bottom  : 0     //bileşenin, parent ın alt kenarından uzaklığı
    },


    hizalama: {
        flexDirection : '',   //bileşen satır mı yoksa sütun mu, bileşenin yönelimi :: 'column', 'row' (default : column)
        flexWrap      : '',   //bileşen, child larını taşmayacak şekilde yerleştirsin :: 'wrap', 'no-wrap'
        justifyContent: '',   //bileşen hangi yönelimde ise cocuklarını o yönde hizalar :: 'center', 'flex-end', 'flex-start', 'space-between', 'space-evenly', 'space-around'
        alignItems    : '',   //bileşen hangi yönelimde ise cocuklarını diğer yönde hizalar :: 'center', 'flex-end', 'flex-start'
        alignSelf     : '',   //bileşen kendini parent bileşenin yönelimine göre hizalar :: 'center', 'flex-end', 'flex-start'
    }
});

export default css;
