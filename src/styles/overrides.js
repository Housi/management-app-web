export const overrides = {
  MuiInputBase: {
    input: {
      '&::placeholder': {
        opacity: 1,
      },
    },
  },
  MuiLinearProgress: {
    root: {
      borderRadius: 3,
      overflow: 'hidden',
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: 10,
    },
  },
  MuiListSubheader: {
    root: {
      fontWeight: 600,
    },
  },
  MuiMenuItem: {
    root: {
      justifyContent: 'space-between',
    },
  },
  MuiButton: {
    root: {
      borderRadius: 50,
      textTransform: 'none',
    },
  },
  MuiPopover: {
    root: {
      width: 300,
    },
    paper: {
      minWidth: 300,
      boxShadow: '0px 4px 20px rgba(35, 31, 31, 0.1)',
    },
  },
};
