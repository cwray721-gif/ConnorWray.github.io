type ColorKey = 'red' | 'blue' | 'indigo' | 'teal' | 'violet' | 'sky' | 'orange' | 'slate' | 'green' | 'pink' | 'yellow';

export const colorVariants: Record<ColorKey, { tag: string; title: string; link: string; border: string }> = {
    red: {
      tag: "bg-red-50 text-red-700 border-red-100",
      title: "group-hover:text-red-600",
      link: "hover:text-red-600",
      border: "hover:border-red-200",
    },
    blue: {
      tag: "bg-blue-50 text-blue-700 border-blue-100",
      title: "group-hover:text-blue-600",
      link: "hover:text-blue-600",
      border: "hover:border-blue-200",
    },
    indigo: {
      tag: "bg-indigo-50 text-indigo-700 border-indigo-100",
      title: "group-hover:text-indigo-600",
      link: "hover:text-indigo-600",
      border: "hover:border-indigo-200",
    },
    teal: {
      tag: "bg-teal-50 text-teal-700 border-teal-100",
      title: "group-hover:text-teal-600",
      link: "hover:text-teal-600",
      border: "hover:border-teal-200",
    },
    violet: {
      tag: "bg-violet-50 text-violet-700 border-violet-100",
      title: "group-hover:text-violet-600",
      link: "hover:text-violet-600",
      border: "hover:border-violet-200",
    },
    sky: {
      tag: "bg-sky-50 text-sky-700 border-sky-100",
      title: "group-hover:text-sky-600",
      link: "hover:text-sky-600",
      border: "hover:border-sky-200",
    },
    orange: {
      tag: "bg-orange-50 text-orange-700 border-orange-100",
      title: "group-hover:text-orange-600",
      link: "hover:text-orange-600",
      border: "hover:border-orange-200",
    },
    slate: {
      tag: "bg-slate-100 text-slate-900 border-slate-200",
      title: "group-hover:text-slate-600",
      link: "hover:text-slate-600",
      border: "hover:border-slate-300",
    },
    green: {
      tag: "bg-green-50 text-green-700 border-green-100",
      title: "group-hover:text-green-600",
      link: "hover:text-green-600",
      border: "hover:border-green-200",
    },
    pink: {
      tag: "bg-pink-50 text-pink-700 border-pink-100",
      title: "group-hover:text-pink-600",
      link: "hover:text-pink-600",
      border: "hover:border-pink-200",  
    },
    yellow: {
      tag: "bg-yellow-50 text-yellow-700 border-yellow-100",
      title: "group-hover:text-yellow-600", 
      link: "hover:text-yellow-600",
      border: "hover:border-yellow-200",
    },
  };