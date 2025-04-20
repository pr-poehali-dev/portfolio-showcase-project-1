import React from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, User, Code, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Использовать NavigationMenuLink напрямую в Link вызывает вложенность <a> в <a>
  // Нам нужно создать стиль без NavigationMenuLink
  const linkStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <User className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Портфолио</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={linkStyle}>
                  <Code className="mr-2 h-4 w-4" />
                  Главная
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/experience" className={linkStyle}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  Опыт работы
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacts" className={linkStyle}>
                  <Mail className="mr-2 h-4 w-4" />
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              className="px-4 py-3 hover:bg-muted flex items-center" 
              onClick={toggleMenu}
            >
              <Code className="mr-2 h-5 w-5" />
              Главная
            </Link>
            <Link 
              to="/experience" 
              className="px-4 py-3 hover:bg-muted flex items-center" 
              onClick={toggleMenu}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Опыт работы
            </Link>
            <Link 
              to="/contacts" 
              className="px-4 py-3 hover:bg-muted flex items-center" 
              onClick={toggleMenu}
            >
              <Mail className="mr-2 h-5 w-5" />
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
