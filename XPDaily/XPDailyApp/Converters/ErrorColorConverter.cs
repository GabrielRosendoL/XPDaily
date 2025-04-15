using System.Globalization;
using System.Windows.Data;
using System.Windows.Media;

namespace XPDailyApp.Converters;

public class ErrorColorConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (value is bool isError)
        {
            return isError ? Brushes.Red : Brushes.Green;
        }
        return Brushes.Black;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
} 