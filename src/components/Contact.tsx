import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Поддержка
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Напиши нам
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Если тебе плохо прямо сейчас, или ты хочешь поделиться, как прошёл экзамен — напиши. Здесь тебя услышат.
            </p>

            {/* Helpful info */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Экстренная помощь</p>
                <a href="tel:88002000122" className="text-foreground hover:text-sage transition-colors">
                  8-800-2000-122 — детский телефон доверия (бесплатно, 24/7)
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Напомни себе</p>
                <p className="text-foreground">Один экзамен — не конец пути. Ты больше, чем цифра в аттестате.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Calming tips card */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-sand/60 p-10 lg:p-14 space-y-8">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Прямо сейчас тебе тревожно?</p>
              <p className="font-serif text-2xl text-foreground font-light leading-relaxed">
                Сделай это прямо сейчас:
              </p>
              <ol className="space-y-5 text-muted-foreground leading-relaxed">
                <li className="flex gap-4">
                  <span className="font-serif text-2xl text-sage shrink-0">1</span>
                  <span>Положи руку на грудь. Почувствуй, как она поднимается и опускается.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-2xl text-sage shrink-0">2</span>
                  <span>Вдох через нос — 4 секунды. Задержка — 7. Выдох через рот — 8.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-2xl text-sage shrink-0">3</span>
                  <span>Назови 5 вещей вокруг тебя. Медленно. Ты здесь. Ты в безопасности.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-2xl text-sage shrink-0">4</span>
                  <span>Повтори себе: «Я справлюсь с этим шагом за шагом».</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
