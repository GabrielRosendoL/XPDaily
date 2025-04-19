using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;
using System.Windows.Controls;

namespace XPDailyApp.ViewModels;

public class MainViewModel : INotifyPropertyChanged
{
// ----------------------------
    public event PropertyChangedEventHandler? PropertyChanged;
// ----------------------------
    protected virtual void OnPropertyChanged([CallerMemberName] string? propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
// ----------------------------
}