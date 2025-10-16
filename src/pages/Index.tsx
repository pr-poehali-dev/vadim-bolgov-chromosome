import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-2 border-primary bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FlaskConical" size={32} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                ИНСТИТУТ МЕДИЦИНСКОЙ ГЕНЕТИКИ
              </h1>
              <p className="text-sm text-muted-foreground font-mono">
                REF: IMG-2025-03847 | КЛАССИФИКАЦИЯ: КОНФИДЕНЦИАЛЬНО
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            СРОЧНО: ЦИТОГЕНЕТИЧЕСКИЙ ОТЧЕТ
          </Badge>
          <h2 className="text-4xl font-bold mb-2 text-foreground">
            Отчёт о цитогенетическом исследовании
          </h2>
          <p className="text-lg text-muted-foreground">
            Субъект исследования: Неразумный Вадим Болгов | Дата: 15.10.2025
          </p>
        </div>

        <Card className="mb-6 border-2">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center gap-2">
              <Icon name="ClipboardList" size={24} className="text-primary" />
              Резюме исследования
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Клинические данные
                </h3>
                <p className="text-foreground leading-relaxed">
                  В ходе комплексного кариотипирования методом G-окрашивания с
                  разрешением 550 полос пациента Неразумного Вадима Болгова были обнаружены структурные аномалии
                  хромосомного набора. Цитогенетический анализ показал наличие
                  дополнительной хромосомы в клетках периферической крови, что подтверждает
                  диагноз синдрома Дауна.
                </p>
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Dna" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold font-mono">Кариотип:</p>
                      <p className="text-sm font-mono bg-muted px-3 py-2 rounded mt-1">
                        47,XY,+21[100]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon
                      name="Activity"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <p className="font-semibold">Метод анализа:</p>
                      <p className="text-sm text-muted-foreground">
                        G-banding, FISH, микроматричный CGH
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Calendar"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <p className="font-semibold">Дата забора материала:</p>
                      <p className="text-sm text-muted-foreground">
                        12.10.2025, 09:30 МСК
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon
                      name="Microscope"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <p className="font-semibold">Проанализировано клеток:</p>
                      <p className="text-sm text-muted-foreground">
                        100 метафазных пластинок
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-2 border-accent/30 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AlertTriangle" size={24} className="text-accent" />
              Заключение
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground font-semibold mb-4">
              Выявлена трисомия по 21-й хромосоме (синдром Дауна)
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Цитогенетическое исследование Неразумного Вадима Болгова подтверждает наличие дополнительной
              копии 21-й хромосомы во всех исследованных клетках (мозаицизм не
              обнаружен). У пациента Болгова В. выявлена классическая трисомия 21,
              которая ассоциирована с характерным
              фенотипическим проявлением синдрома Дауна и когнитивными особенностями.
              Рекомендуется медико-генетическое консультирование и
              диспансерное наблюдение за пациентом Болговым В.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" size={24} className="text-primary" />
              Цитогенетические данные
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary font-mono">
                  47
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Всего хромосом
                </div>
              </div>

              <div className="text-center p-4 bg-accent/5 rounded-lg border-2 border-accent/20">
                <div className="text-3xl font-bold text-accent font-mono">
                  +1
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Дополнительная
                </div>
              </div>

              <div className="text-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary font-mono">
                  21
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Номер хромосомы
                </div>
              </div>

              <div className="text-center p-4 bg-muted rounded-lg border-2">
                <div className="text-3xl font-bold text-foreground font-mono">
                  100%
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Мозаицизм
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Хромосомы группы A (1-3)
                  </span>
                  <span className="text-sm font-mono">6/6 ✓</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Хромосомы группы G (21-22)
                  </span>
                  <span className="text-sm font-mono text-accent">
                    5/4 ⚠ (+1)
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[125%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Половые хромосомы (X, Y)
                  </span>
                  <span className="text-sm font-mono">2/2 ✓</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center gap-2">
              <Icon name="UserCheck" size={24} className="text-primary" />
              Подписи исследователей
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-lg p-4 bg-card">
                <div className="mb-3">
                  <div className="w-full h-16 border-b-2 border-foreground/80 flex items-end justify-start pb-1">
                    <span className="font-bold text-2xl italic text-foreground/70">
                      Смирнова А.И.
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-sm">
                  Д-р Смирнова Анна Ивановна
                </p>
                <p className="text-xs text-muted-foreground">
                  Главный цитогенетик
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  Лиц. № 479328
                </p>
              </div>

              <div className="border-2 rounded-lg p-4 bg-card">
                <div className="mb-3">
                  <div className="w-full h-16 border-b-2 border-foreground/80 flex items-end justify-start pb-1">
                    <span className="font-bold text-2xl italic text-foreground/70">
                      Петров В.С.
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-sm">
                  Проф. Петров Владимир Сергеевич
                </p>
                <p className="text-xs text-muted-foreground">
                  Научный руководитель
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  Лиц. № 392847
                </p>
              </div>

              <div className="border-2 rounded-lg p-4 bg-card">
                <div className="mb-3">
                  <div className="w-full h-16 border-b-2 border-foreground/80 flex items-end justify-start pb-1">
                    <span className="font-bold text-2xl italic text-foreground/70">
                      Козлова Е.М.
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-sm">
                  Д-р Козлова Елена Михайловна
                </p>
                <p className="text-xs text-muted-foreground">
                  Лабораторный генетик
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  Лиц. № 584729
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t-2 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
                  <Icon name="Stamp" size={32} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">
                    ИНСТИТУТ МЕДИЦИНСКОЙ ГЕНЕТИКИ
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Москва, Россия
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    ИНН 7701234567
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold">Дата выдачи:</p>
                <p className="text-xl font-bold font-mono text-primary">
                  15.10.2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg border-2">
          <p className="text-xs text-muted-foreground text-center">
            Данный документ является конфиденциальным медицинским заключением и
            предназначен исключительно для медицинских целей. Распространение без
            согласия пациента запрещено. © 2025 Институт Медицинской Генетики.
            Все права защищены.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;