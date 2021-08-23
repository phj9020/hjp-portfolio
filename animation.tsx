// capability card child & experience & Dev study section 
export const fadeInAnimation = {
    initial: {
        opacity:0,
        y: 30
    },
    animate: {
        y:0,
        opacity:1,
        transition: {
            duration: 0.4
        }
    }
};

export const projectModalAnimation = {
    initial: {
        opacity:0
    },
    animate: {
        opacity:1,
        transition: {
            duration: 0.2
        }
    }
}

// capability card container 
export const stagger = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// route animation
export const routeAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.2,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: 'easeInOut'
        }
    }
}