export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Спокойно</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Помощник выпускника. Техники управления стрессом перед экзаменами.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                О стрессе
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Техники
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                По срокам
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Поддержка
              </a>
            </nav>
          </div>

          {/* Extra */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Экстренно</p>
            <nav className="flex flex-col gap-3">
              <a href="tel:88002000122" className="text-sm text-foreground hover:text-sage transition-colors">
                Телефон доверия
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Быстрая техника
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Поделись</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                ВКонтакте
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Telegram
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Спокойно. Ты справишься.
          </p>
          <p className="text-xs text-muted-foreground">Создано с заботой о выпускниках</p>
        </div>
      </div>
    </footer>
  )
}
