import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "За месяц до экзамена",
    description:
      "Составь расписание с чёткими блоками отдыха — мозг запоминает лучше, когда есть перерывы. Добавь 20 минут физической активности в день: это снижает тревогу лучше любого успокоительного. Ложись спать в одно время. Ограничь кофе после 15:00.",
  },
  {
    number: "02",
    title: "За неделю до экзамена",
    description:
      "Не учи новое — повторяй уже пройденное. Делай «разгрузочный день» за 2 дня до экзамена: лёгкое повторение, прогулка, ранний отход ко сну. Каждый вечер записывай 3 вещи, которые получились сегодня — это перестраивает мозг с тревоги на уверенность.",
  },
  {
    number: "03",
    title: "За день и утром перед экзаменом",
    description:
      "Накануне вечером — прогрессивная релаксация мышц и 8 часов сна. Утром — лёгкий завтрак с углеводами (овсянка, банан). По дороге к месту экзамена — дыхание 4-7-8. Не обсуждай с друзьями «страшные билеты» — это заражает тревогой.",
  },
  {
    number: "04",
    title: "Прямо в аудитории",
    description:
      "Получил билет — сделай 3 медленных выдоха, прежде чем читать. Если паника — метод «5-4-3-2-1» прямо за партой, молча. Не знаешь вопрос — пиши то, что знаешь близкое к теме. Потеть и дрожать — это нормально, это адреналин, он помогает думать быстрее.",
  },
]

export function Process() {
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
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                По срокам
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Что делать
                <span className="italic"> когда</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Каждый этап — это конкретные действия, а не абстрактные советы. Открой нужный раздел и просто сделай следующий шаг.
              </p>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
