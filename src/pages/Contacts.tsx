import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Форма отправлена! В реальном проекте здесь будет обработка формы.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Свяжитесь со мной для обсуждения сотрудничества или задайте интересующие вас вопросы
          </p>
        </div>
      </div>
      
      <section className="portfolio-section">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Напишите мне</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Ваша фамилия" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input id="subject" placeholder="Тема сообщения" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение..." 
                    className="min-h-[120px]" 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto">Отправить сообщение</Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@example.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 (123) 456-78-90</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Местоположение</p>
                    <p className="font-medium">Москва, Россия</p>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="portfolio-section bg-muted/50 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Моё местоположение</h2>
        <div className="h-[400px] bg-muted rounded-lg border overflow-hidden">
          {/* В реальном проекте здесь была бы интеграция Google Maps */}
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-lg">
            Здесь будет карта Google Maps
          </div>
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

export default Contacts;
