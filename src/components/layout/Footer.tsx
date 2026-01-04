import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight">BrainDevelop</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">Career Intelligence Platform</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Guiding careers with clarity, science & experience since 2021. DMIT-based career counseling for students, parents, and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "DMIT Assessment", href: "/dmit" },
                { name: "Assessment Process", href: "/process" },
                { name: "Career Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium text-primary-foreground mb-1">Solan Office</p>
                  <span>
                    2nd Floor, Thakur Complex,<br />
                    Above Utkarsh Bank,<br />
                    Kotlanala Chowk, Solan,<br />
                    Himachal Pradesh – 173212
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium text-primary-foreground mb-1">Zirakpur Office</p>
                  <span>
                    Block-A, 4th Floor - 409,<br />
                    Chandigarh City Centre (CCC),<br />
                    VIP Road, Zirakpur,<br />
                    Punjab – 140603
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+919805500827"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  +91 98055 00827
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@braindevelop.in"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  info@braindevelop.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Visiting Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-accent shrink-0" />
              <div className="text-primary-foreground/80 text-sm space-y-1">
                <p>Monday – Saturday</p>
                <p>10:00 AM – 6:00 PM</p>
                <p className="text-primary-foreground/60 mt-2">Sunday by appointment only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} BrainDevelop Career Intelligence. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.facebook.com/share/1Bmg9tqnrv/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
