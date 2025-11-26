import { Package, RefreshCw, ShieldCheck, Headphones } from 'lucide-react';
import { IMAGES } from './images';

export const HERO_SLIDES = [
    {
        id: 1,
        image: IMAGES.img1,
        title: "Lançamento Nova Estação",
        subtitle: "Para Homens & Mulheres",
        counter: "01"
    },
    {
        id: 2,
        image: IMAGES.img2,
        title: "Essenciais Atemporais",
        subtitle: "Redefinindo o Básico",
        counter: "02"
    },
    {
        id: 3,
        image: IMAGES.img3,
        title: "Coleção de Inverno",
        subtitle: "Elegância Moderna",
        counter: "03"
    }
];

export const BESTSELLERS = [
    {
        id: 1,
        name: "Essential Hoodie",
        price: "R$ 299,00",
        image: IMAGES.img4,
    },
    {
        id: 2,
        name: "Ocean Hoodie",
        price: "R$ 299,00",
        image: IMAGES.img5,
    },
    {
        id: 3,
        name: "Forest Oversize T-Shirt",
        price: "R$ 149,00",
        image: IMAGES.img6,
    }
];

export const NEW_ARRIVALS_HOME = [
    {
        id: 105,
        name: "Sand Oversize T-Shirt",
        price: "R$ 149,00",
        tag: "NOVO",
        image: IMAGES.img7
    },
    {
        id: 108,
        name: "Faded Black Jeans",
        price: "R$ 239,00",
        image: IMAGES.img8
    },
    {
        id: 109,
        name: "Distressed Light Jeans",
        price: "R$ 239,00",
        tag: "NOVO",
        image: IMAGES.img9
    }
];

export const MEN_CATEGORIES = ["Todos", "Hoodies", "T-Shirts", "Calças", "Novidades", "Ofertas"];

export const MENS_PRODUCTS = [
    {
        id: 101,
        name: "Essential Hoodie",
        price: "R$ 299,00",
        category: "Hoodies",
        image: IMAGES.img10
    },
    {
        id: 102,
        name: "Sand Hoodie",
        price: "R$ 299,00",
        originalPrice: "R$ 359,00",
        tag: "SALE",
        tagColor: "red",
        category: "Hoodies",
        image: IMAGES.img11
    },
    {
        id: 103,
        name: "Ocean Hoodie",
        price: "R$ 299,00",
        category: "Hoodies",
        image: IMAGES.img12
    },
    {
        id: 104,
        name: "Black Oversize T-Shirt",
        price: "R$ 109,00",
        originalPrice: "R$ 239,00",
        tag: "SALE",
        tagColor: "red",
        category: "T-Shirts",
        image: IMAGES.img13
    },
    {
        id: 105,
        name: "Sand Oversize T-Shirt",
        price: "R$ 149,00",
        tag: "NOVO",
        tagColor: "black",
        category: "T-Shirts",
        image: IMAGES.img14
    },
    {
        id: 106,
        name: "Forest Oversize T-Shirt",
        price: "R$ 149,00",
        category: "T-Shirts",
        image: IMAGES.img15
    },
    {
        id: 107,
        name: "Core Utility Pants",
        price: "R$ 239,00",
        originalPrice: "R$ 359,00",
        tag: "SALE",
        tagColor: "red",
        category: "Calças",
        image: IMAGES.img16
    },
    {
        id: 108,
        name: "Faded Black Jeans",
        price: "R$ 239,00",
        category: "Calças",
        image: IMAGES.img17
    },
    {
        id: 109,
        name: "Distressed Light Jeans",
        price: "R$ 239,00",
        tag: "NOVO",
        tagColor: "black",
        category: "Calças",
        image: IMAGES.img18
    }
];

export const WOMEN_CATEGORIES = ["Todos", "Vestidos", "Tops", "Saias", "Novidades", "Ofertas"];

export const WOMEN_PRODUCTS = [
    {
        id: 201,
        name: "Silk Evening Dress",
        price: "R$ 459,00",
        category: "Vestidos",
        tag: "NOVO",
        image: IMAGES.img19
    },
    {
        id: 202,
        name: "Casual Summer Dress",
        price: "R$ 199,00",
        originalPrice: "R$ 259,00",
        tag: "SALE",
        tagColor: "red",
        category: "Vestidos",
        image: IMAGES.img20
    },
    {
        id: 203,
        name: "Minimalist White Top",
        price: "R$ 89,00",
        category: "Tops",
        image: IMAGES.img21
    },
    {
        id: 204,
        name: "Linen Blouse",
        price: "R$ 159,00",
        category: "Tops",
        image: IMAGES.img22
    },
    {
        id: 205,
        name: "Pleated Midi Skirt",
        price: "R$ 219,00",
        category: "Saias",
        image: IMAGES.img23
    },
    {
        id: 206,
        name: "High-Waist Shorts",
        price: "R$ 129,00",
        category: "Saias",
        image: IMAGES.img24
    }
];

export const SOCIAL_IMAGES = [
    IMAGES.img25,
    IMAGES.img26,
    IMAGES.img27,
    IMAGES.img28,
    IMAGES.img29,
    IMAGES.img30,
    IMAGES.img31,
    IMAGES.img32
];

export const FEATURES = [
    { icon: Package, title: "Frete Grátis", subtitle: "em compras acima de R$ 149" },
    { icon: RefreshCw, title: "Troca Fácil", subtitle: "em até 30 dias" },
    { icon: ShieldCheck, title: "Pagamento Seguro", subtitle: "Transações 100% protegidas" },
    { icon: Headphones, title: "Suporte 24/7", subtitle: "Atendimento dedicado" },
];

export const FAQ_ITEMS = [
    { question: "Como faço para rastrear meu pedido?", answer: "Assim que seu pedido for enviado, você receberá um e-mail com o código de rastreamento. Você pode usá-lo em nossa página de rastreamento." },
    { question: "Qual é a política de devolução?", answer: "Aceitamos devoluções dentro de 30 dias após a entrega. O item deve estar sem uso e com as etiquetas originais." },
    { question: "Vocês entregam internacionalmente?", answer: "Sim, enviamos para todo o mundo. As taxas de envio podem variar dependendo do local." },
    { question: "Quais métodos de pagamento são aceitos?", answer: "Aceitamos todos os principais cartões de crédito, PayPal e Apple Pay." }
];
