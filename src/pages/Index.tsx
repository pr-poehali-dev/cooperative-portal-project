import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const investmentShares = [
    {
      id: 1,
      name: "Недвижимость Премиум",
      yield: "12.5%",
      minInvestment: "500,000₽",
      category: "Недвижимость",
      risk: "Низкий",
      image: "/img/1f7ba8ac-6cf2-4b5b-bbe0-fd433b7dc04d.jpg",
    },
    {
      id: 2,
      name: "Яхтенный Флот",
      yield: "15.8%",
      minInvestment: "1,000,000₽",
      category: "Яхты",
      risk: "Средний",
      image: "/img/9586a6aa-73f6-4636-b9ff-db2468c4078a.jpg",
    },
    {
      id: 3,
      name: "Автомобильная Коллекция",
      yield: "18.2%",
      minInvestment: "750,000₽",
      category: "Автомобили",
      risk: "Средний",
      image: "/img/f4d0ac44-3d97-4341-bc9e-7658c924dd1b.jpg",
    },
  ];

  const luxuryItems = [
    {
      title: "Вилла на Лазурном Берегу",
      price: "15,000,000₽",
      category: "Недвижимость",
      features: ["300 м²", "Вид на море", "Бассейн"],
      image: "/img/1f7ba8ac-6cf2-4b5b-bbe0-fd433b7dc04d.jpg",
    },
    {
      title: "Яхта Sunseeker 88",
      price: "45,000,000₽",
      category: "Яхты",
      features: ["27 метров", "6 кают", "Экипаж"],
      image: "/img/9586a6aa-73f6-4636-b9ff-db2468c4078a.jpg",
    },
    {
      title: "McLaren 720S",
      price: "18,500,000₽",
      category: "Автомобили",
      features: ["720 л.с.", "0-100 за 2.9с", "Карбон"],
      image: "/img/f4d0ac44-3d97-4341-bc9e-7658c924dd1b.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.poehali.dev/files/6c1b185d-8f81-4600-8f26-93ae29b5cde3.jpg"
                  alt="КАЙФ ОЗЕРО"
                  className="h-12 w-12 object-contain"
                />
                <div className="flex flex-col">
                  <h1 className="font-heading text-xl font-semibold leading-tight">
                    КАЙФ
                  </h1>
                  <span className="font-heading text-sm tracking-[0.2em] text-muted-foreground">
                    ОЗЕРО
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#shares"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Паи
                </a>
                <a
                  href="#real-estate"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Недвижимость
                </a>
                <a
                  href="#yachts"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Яхты
                </a>
                <a
                  href="#cars"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Автомобили
                </a>
                <a
                  href="#events"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Мероприятия
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Стать участником
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Потребительский Кооператив
            <br />
            <span className="font-semibold">КАЙФ ОЗЕРО</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Эксклюзивные возможности инвестирования в недвижимость
            премиум-класса, яхты и автомобильные коллекции для избранного круга
            участников
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Изучить паи
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Документы
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Shares */}
      <section id="shares" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-light mb-4">
              Инвестиционные Паи
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Диверсифицированные программы с гарантированной доходностью и
              прозрачной отчетностью
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentShares.map((share) => (
              <Card
                key={share.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={share.image}
                    alt={share.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {share.category}
                    </Badge>
                    <Badge
                      variant={
                        share.risk === "Низкий" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {share.risk} риск
                    </Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {share.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Доходность
                      </span>
                      <span className="font-semibold text-green-600">
                        {share.yield}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Мин. взнос
                      </span>
                      <span className="font-semibold">
                        {share.minInvestment}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Купить пай
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Info" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Catalog */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-light mb-4">
              Каталог Премиум
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Эксклюзивные объекты недвижимости, яхты и автомобили для
              участников кооператива
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {luxuryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/80 text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        Подробнее
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl font-light mb-2">250+</div>
              <p className="text-sm opacity-90">Участников</p>
            </div>
            <div>
              <div className="font-heading text-3xl font-light mb-2">
                ₽2.5млрд
              </div>
              <p className="text-sm opacity-90">Под управлением</p>
            </div>
            <div>
              <div className="font-heading text-3xl font-light mb-2">15.2%</div>
              <p className="text-sm opacity-90">Средняя доходность</p>
            </div>
            <div>
              <div className="font-heading text-3xl font-light mb-2">7</div>
              <p className="text-sm opacity-90">Лет на рынке</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-heading text-4xl font-light mb-6">
            Готовы присоединиться к кооперативу?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Получите персональную консультацию и узнайте о возможностях
            эксклюзивного членства в нашем кооперативе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.poehali.dev/files/6c1b185d-8f81-4600-8f26-93ae29b5cde3.jpg"
                  alt="КАЙФ ОЗЕРО"
                  className="h-8 w-8 object-contain"
                />
                <div className="flex flex-col">
                  <h4 className="font-heading text-lg font-semibold leading-tight">
                    КАЙФ
                  </h4>
                  <span className="font-heading text-xs tracking-[0.15em] text-muted-foreground">
                    ОЗЕРО
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Потребительский кооператив премиум-класса для особенных людей
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Инвестиции</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Недвижимость
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Яхты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Автомобили
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Мероприятия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4">Участие</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Стать участником
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Паевые программы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Документы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Отчеты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@kaifozero.ru</li>
                <li>Москва, Тверская 1</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 Потребительский Кооператив "КАЙФ ОЗЕРО". Все права
              защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-foreground">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
