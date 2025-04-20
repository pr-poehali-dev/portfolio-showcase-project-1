import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
};

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

const Experience = () => {
  const workExperience: ExperienceItem[] = [
    {
      company: "Технологии Будущего",
      position: "Старший Frontend-разработчик",
      period: "2021 - настоящее время",
      description: "Разработка и поддержка SPA с использованием React, TypeScript и Redux. Оптимизация производительности, внедрение новых технологий, менторство младших разработчиков.",
      technologies: ["React", "TypeScript", "Redux", "GraphQL", "Webpack"]
    },
    {
      company: "Инновационные Решения",
      position: "Frontend-разработчик",
      period: "2019 - 2021",
      description: "Разработка пользовательских интерфейсов для корпоративных клиентов. Интеграция с бэкенд API, создание адаптивных дизайнов, тестирование и отладка.",
      technologies: ["JavaScript", "Vue.js", "CSS3", "REST API", "Jest"]
    },
    {
      company: "ВебСтарт",
      position: "Junior Frontend-разработчик",
      period: "2018 - 2019",
      description: "Вёрстка сайтов по макетам дизайнеров, оптимизация для мобильных устройств, базовое программирование на JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  const education: EducationItem[] = [
    {
      institution: "Московский Технический Университет",
      degree: "Магистр компьютерных наук",
      period: "2016 - 2018",
      description: "Специализация в области веб-технологий и разработки программного обеспечения."
    },
    {
      institution: "Московский Технический Университет",
      degree: "Бакалавр информационных технологий",
      period: "2012 - 2016",
      description: "Изучение основ программирования, алгоритмов, структур данных и веб-разработки."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Опыт работы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Мой профессиональный путь в разработке и технологии, с которыми я работал
          </p>
        </div>
      </div>
      
      {/* Work Experience */}
      <section className="portfolio-section">
        <h2 className="portfolio-heading">Профессиональный опыт</h2>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl">{job.position}</CardTitle>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Education */}
      <section className="portfolio-section bg-muted/50">
        <h2 className="portfolio-heading">Образование</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">{edu.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Skills */}
      <section className="portfolio-section">
        <h2 className="portfolio-heading">Профессиональные навыки</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">HTML, CSS</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">JavaScript</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">React</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">TypeScript</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Node.js</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Express</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">MongoDB</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">SQL</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[70%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Инструменты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Git</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Docker</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">CI/CD</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Figma</p>
                  <div className="h-2 bg-muted rounded overflow-hidden mt-1">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted/70 py-6 mt-auto">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Иван Иванов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
