import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Briefcase, Mail } from "lucide-react";

const Index = () => {
  const skills = [
    "HTML/CSS", "JavaScript", "TypeScript", "React", "Node.js", 
    "Express", "MongoDB", "SQL", "Git", "Figma"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="portfolio-section flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Привет, меня зовут <span className="text-primary">Иван Иванов</span>
          </h1>
          <p className="text-lg mb-6 text-muted-foreground animate-fade-in">
            Я профессиональный веб-разработчик с более чем 5-летним опытом создания 
            современных веб-приложений и сайтов.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
            <Link to="/experience">
              <Button className="flex items-center gap-2">
                <Briefcase size={18} />
                Мой опыт
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline" className="flex items-center gap-2">
                <Mail size={18} />
                Связаться со мной
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-square rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-primary max-w-[300px] mx-auto">
            <img 
              src="/placeholder.svg" 
              alt="Фото профиля" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="portfolio-section bg-muted/50">
        <h2 className="portfolio-heading after:bg-primary">О себе</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Я специализируюсь на создании отзывчивых и быстрых веб-приложений с использованием 
              современных технологий и фреймворков.
            </p>
            <p className="text-lg mb-4">
              За более чем 5 лет работы в сфере разработки я успешно реализовал множество 
              проектов различной сложности — от лендингов до полноценных SPA-приложений.
            </p>
            <p className="text-lg">
              Мой подход — создавать эффективные решения, которые не только выглядят привлекательно, 
              но и обеспечивают отличный пользовательский опыт.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Мои навыки</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/experience">
                <Button variant="link" className="flex items-center gap-1 p-0">
                  Подробнее о моём опыте <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="portfolio-section">
        <h2 className="portfolio-heading">Избранные проекты</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted w-full">
                <img 
                  src="/placeholder.svg" 
                  alt={`Проект ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Проект {i}</h3>
                <p className="text-muted-foreground mb-4">
                  Краткое описание проекта, его цели и использованные технологии.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-section bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-lg mb-8 opacity-90">
            У вас есть идея или проект? Давайте воплотим его в жизнь вместе!
          </p>
          <Link to="/contacts">
            <Button size="lg" variant="secondary" className="px-8">
              Связаться
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/70 py-6">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Иван Иванов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
