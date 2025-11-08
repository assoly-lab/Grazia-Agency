"use client"
import { Menu, ChevronRight } from "lucide-react"
import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/features/components/ui/accordion"
import { Button } from "@/features/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/features/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/features/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  gridItems?: MenuItem[]
  flexItems?: MenuItem[]
  columnTitle?: string
  columnDescription?: string
}

interface NavbarProps {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
  auth?: {
    signup: {
      title: string
      url: string
    }
  }
}

const Navbar = ({
  logo = {
    url: "#",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Grazia Agency",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Services",
      url: "#",
      gridItems: [
        {
          columnTitle: "Management Software",
          columnDescription: "Development of management software",
          title: "Customised applications and software",
          url: "#",
        },
        {
          title: "Mobile application (Android & iOS)",
          url: "#",
        },
        {
          title: "Our Solutions",
          url: "#",
        },
        {
          columnTitle: "Website creation",
          columnDescription: "Creation and redesign of websites",
          title: "Website maintenance",
          url: "#",
        },
        {
          title: "Website creation",
          url: "#",
        },
        {
          title: "E-Commerce website creation",
          url: "#",
        },
        {
          title: "Domain name",
          url: "#",
        },
        {
          title: "Web hosting",
          url: "#",
        },
        {
          columnTitle: "E-reputation",
          columnDescription: "Digital marketing solutions",
          title: "Consulting and Strategy",
          url: "#",
        },
        {
          title: "Search Engine Optimisation (SEO)",
          url: "#",
        },
        {
          title: "Paid advertising (SEA / SMA)",
          url: "#",
        },
        {
          title: "Community Management",
          url: "#",
        },
        {
          title: "Digital Content Creation",
          url: "#",
        },
        {
          title: "Branding and Visual Creation",
          url: "#",
        },
        {
          title: "Print and Communication Media",
          url: "#",
        },
      ],
    },
    {
      title: "Portfolio",
      url: "#",
      flexItems: [
        {
          title: "Web Development",
          url: "#",
        },
        {
          title: "Mobile App Development",
          url: "#",
        },
        {
          title: "UI/UX Design",
          url: "#",
        },
        {
          title: "Graphic Design",
          url: "#",
        },
      ],
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ],
  auth = {
    signup: { title: "Ask for a quote", url: "#" },
  },
}: NavbarProps) => {
  return (
    <section className="sticky top-0 left-0 z-40 mt-14 md:mt-0 py-4 border-b font-open-sans bg-white shadow-none lg:shadow-md">
      <div className="container flex justify-center">
        {/* Desktop Menu */}
        <nav className="md:w-[90%] hidden items-center justify-between lg:flex">
          <div>
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src || "/placeholder.svg"}
                className="max-h-12 dark:invert"
                alt={logo.alt}
                width={12}
                height={12}
              />
              <span className="text-lg font-semibold tracking-tighter font-playfair">{logo.title}</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="lg" className="px-8 font-medium text-base bg-red-600 hover:bg-red-700">
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block w-[90%] lg:hidden">
          <div className="flex w-full items-center justify-between">
            <div>
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  className="max-h-8 dark:invert"
                  alt={logo.alt}
                  width={12}
                  height={12}
                />
                <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
              </a>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-[90%]">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                        width={12}
                        height={12}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}

const renderMenuItem = (item: MenuItem) => {
  if (item.gridItems) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="font-medium text-base">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-background border border-border left-1/2 -translate-x-1/2">
          <div className="w-full min-w-[1000px] p-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Group items by columnTitle */}
              {groupItemsByColumn(item.gridItems).map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-6">
                  {/* Column Header */}
                  {column[0]?.columnTitle && (
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-red-600 mb-1 font-open-sans">{column[0].columnTitle}</h3>
                      <p className="text-sm text-foreground font-medium font-nunito-sans">{column[0].columnDescription}</p>
                    </div>
                  )}
                  {/* Column Items */}
                  <div className="flex flex-col gap-3 font-nunito-sans">
                    {column.map((subItem) => (
                      <ServiceMenuItem key={subItem.title} item={subItem} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }
  
  if(item.flexItems){
    return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="text-base">{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover min-w-[250px] font-nunito-sans">
            {item.flexItems.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title} className="w-80">
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

const groupItemsByColumn = (items: MenuItem[]) => {
  const columns: MenuItem[][] = [[], [], []]
  let currentCol = 0

  items.forEach((item) => {
    if (item.columnTitle) {
      currentCol = columns.findIndex((col) => col.length === 0)
      if (currentCol === -1) currentCol = 2
    }
    columns[currentCol].push(item)
  })

  return columns
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.gridItems && item.gridItems.length > 0) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">{item.title}</AccordionTrigger>
        <AccordionContent className="mt-4 flex flex-col gap-3">
          {groupItemsByColumn(item.gridItems).map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3 py-2 border-t last:border-t-0 first:border-t-0">
              {column[0]?.columnTitle && (
                <div className="mb-2">
                  <h4 className="text-sm font-bold text-red-600 mb-1">{column[0].columnTitle}</h4>
                  <p className="text-xs text-muted-foreground">{column[0].columnDescription}</p>
                </div>
              )}
              {column.map((subItem) => (
                <a
                  key={subItem.title}
                  href={subItem.url}
                  className="hover:text-red-600 text-sm font-medium transition-colors"
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }
  
  if (item.flexItems && item.flexItems.length > 0) {
     return (
       <AccordionItem key={item.title} value={item.title} className="border-b-0 font-nunito-sans">
         <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
           {item.title}
         </AccordionTrigger>
         <AccordionContent className="mt-2">
           {item.flexItems.map((subItem) => (
             <SubMenuLink key={subItem.title} item={subItem} />
           ))}
         </AccordionContent>
       </AccordionItem>
     );
   }


  return (
    <a key={item.title} href={item.url} className="text-md font-semibold block py-2">
      {item.title}
    </a>
  )
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      href={item.url}
      className="hover:bg-muted hover:text-accent-foreground flex min-w-full select-none flex-col gap-2 rounded-md py-3 px-2 leading-none no-underline outline-none transition-colors"
    >
      <div>
        <div className="text-sm font-bold text-foreground">{item.title}</div>
        {item.description && <p className="text-muted-foreground text-xs leading-snug">{item.description}</p>}
      </div>
    </a>
  )
}

const ServiceMenuItem = ({ item }: { item: MenuItem }) => {
  // Skip column headers from display
  if (!item.columnTitle) {
    return (
      <a
        href={item.url}
        className="group flex items-start gap-3 py-2 px-3 rounded-md hover:bg-muted transition-colors cursor-pointer"
      >
        <ChevronRight className="size-4 text-foreground mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
        <span className="text-sm font-medium text-foreground group-hover:text-red-600 transition-colors">
          {item.title}
        </span>
      </a>
    )
  }
  return null
}

export { Navbar }
